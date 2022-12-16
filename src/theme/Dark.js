import * as React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Header from '../components/Header'

const ColorModeContext = React.createContext({ toggleColorMode: () => { } })
export default function ToggleColorMode({ children }) {
    const [mode, setMode] = React.useState('light')
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
            },
        }),
        [],
    )
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode
                },
            }),
        [mode],
    )

    return (<>
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <Header color={colorMode.toggleColorMode} mode={theme.palette.mode} />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    </>
    )
}