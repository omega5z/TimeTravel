"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
var google_1 = require("next/font/google");
var next_1 = require("@vercel/analytics/next");
require("./globals.css");
var _geist = (0, google_1.Geist)({ subsets: ["latin"] });
var _geistMono = (0, google_1.Geist_Mono)({ subsets: ["latin"] });
exports.metadata = {
    title: 'v0 App',
    description: 'Created with v0',
    generator: 'v0.app',
    icons: {
        icon: [
            {
                url: '/icon-light-32x32.png',
                media: '(prefers-color-scheme: light)',
            },
            {
                url: '/icon-dark-32x32.png',
                media: '(prefers-color-scheme: dark)',
            },
            {
                url: '/icon.svg',
                type: 'image/svg+xml',
            },
        ],
        apple: '/apple-icon.png',
    },
};
function RootLayout(_a) {
    var children = _a.children;
    return (<html lang="en" className="dark">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <next_1.Analytics />}
      </body>
    </html>);
}
