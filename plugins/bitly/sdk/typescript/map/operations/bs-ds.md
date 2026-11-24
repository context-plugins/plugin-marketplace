<!-- Generated file — do not edit; regenerated with the SDK. -->

# BsDs — operations

Accessor: `client.bsDs` · Source: `src/resources/bs-ds.ts` · 1 operation · Request and error types: namespace `BsDs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bitly`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getBsDs

- **Signature**: `getBsDs(options?: RequestOptions): ApiPromise<BsDsResponse, BsDs.GetBsDsError>`
- **Wire**: `GET /bsds`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BsDsResponse`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `BsDs.GetBsDsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `BsDsResponse` | `bsDsResponseSchema` | `src/models/bs-ds-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

