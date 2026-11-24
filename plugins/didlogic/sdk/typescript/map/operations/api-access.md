<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiAccess — operations

Accessor: `client.apiAccess` · Source: `src/resources/api-access.ts` · 1 operation · Request and error types: namespace `ApiAccess`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `didlogic`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### capabilitiesShow

- **Signature**: `capabilitiesShow(options?: RequestOptions): ApiPromise<ApiV1CapabilitiesResponse, ApiAccess.CapabilitiesShowError>`
- **Wire**: `GET /api/v1/capabilities`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CapabilitiesResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `ApiAccess.CapabilitiesShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Capabilities401Error1"` [401] `ApiV1Capabilities401Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CapabilitiesResponse` | `apiV1CapabilitiesResponseSchema` | `src/models/api-v1-capabilities-response.ts` |
| `ApiV1Capabilities401Error1` | `apiV1Capabilities401Error1Schema` | `src/models/api-v1-capabilities401-error1.ts` |

