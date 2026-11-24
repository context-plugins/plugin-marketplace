<!-- Generated file — do not edit; regenerated with the SDK. -->

# App — operations

Accessor: `client.app` · Source: `src/resources/app.ts` · 1 operation · Request and error types: namespace `App`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bundle-social`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### appGetHealth

- **Signature**: `appGetHealth(options?: RequestOptions): ApiPromise<ApiV1Response, App.AppGetHealthError>`
- **Wire**: `GET /api/v1/`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1Response`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `App.AppGetHealthError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1400Error1"` [400] `ApiV1400Error1` · `"apiV1401Error1"` [401] `ApiV1401Error1` · `"apiV1403Error1"` [403] `ApiV1403Error1` · `"apiV1404Error1"` [404] `ApiV1404Error1` · `"apiV1429Error1"` [429] `ApiV1429Error1` · `"apiV1500Error1"` [500] `ApiV1500Error1` · `"apiV1502Error1"` [502] `ApiV1502Error1` · `"apiV1503Error1"` [503] `ApiV1503Error1` · `"apiV1504Error1"` [504] `ApiV1504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1Response` | `apiV1ResponseSchema` | `src/models/api-v1-response.ts` |
| `ApiV1400Error1` | `apiV1400Error1Schema` | `src/models/api-v1400-error1.ts` |
| `ApiV1401Error1` | `apiV1401Error1Schema` | `src/models/api-v1401-error1.ts` |
| `ApiV1403Error1` | `apiV1403Error1Schema` | `src/models/api-v1403-error1.ts` |
| `ApiV1404Error1` | `apiV1404Error1Schema` | `src/models/api-v1404-error1.ts` |
| `ApiV1429Error1` | `apiV1429Error1Schema` | `src/models/api-v1429-error1.ts` |
| `ApiV1500Error1` | `apiV1500Error1Schema` | `src/models/api-v1500-error1.ts` |
| `ApiV1502Error1` | `apiV1502Error1Schema` | `src/models/api-v1502-error1.ts` |
| `ApiV1503Error1` | `apiV1503Error1Schema` | `src/models/api-v1503-error1.ts` |
| `ApiV1504Error1` | `apiV1504Error1Schema` | `src/models/api-v1504-error1.ts` |

