/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            spacing: {
                0.5: '0.12rem',
            },
            transitionTimingFunction: {
                DEFAULT: 'ease-in-out',
            },
            transitionDuration: {
                DEFAULT: '300ms',
            },
            keyframes: {
                fadeIn: {
                    from: {
                        opacity: 0,
                    },
                    to: {
                        opacity: 1,
                    },
                },
            },
            animation: {
                fade: 'fadeIn .5s ease',
            },
            zIndex: {
                1: '1',
                2: '2',
            },
        },
    },
    plugins: [],
};
