<!-- Generated file — do not edit; regenerated with the SDK. -->

# Browsers — operations

Accessor: `client.browsers` · Source: `src/resources/browsers.ts` · 1 operation · Request types: namespace `Browsers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `browser-stack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getBrowsers

- **Signature**: `getBrowsers(options?: RequestOptions): ApiPromise<Browser[], ApiError>`
- **Wire**: `GET /automate/browsers.json`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Browser[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BrowserStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `Browser` | `browserSchema` | `src/models/browser.ts` |

