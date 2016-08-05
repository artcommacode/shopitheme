declare var config: {
  ':api_key': string,
  ':password': string,
  ':store': string,
  ':theme_id': string | null,
  ':whitelist_files': [string]
} | typeof undefined

declare var args: {
  '_': [string],
  browser: string | typeof undefined
}
