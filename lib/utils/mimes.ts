interface IMimeObject {
    [key: string]: string
}

const mimes: IMimeObject = {
    'jpg': 'image/jpeg',
    'png': 'image/png',
    'gif': 'image/gif',
    'svg': 'image/svg+xml',
    'psd': 'image/photoshop'
}

export default mimes
