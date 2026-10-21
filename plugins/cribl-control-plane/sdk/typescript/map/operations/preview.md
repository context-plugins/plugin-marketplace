<!-- Generated file — do not edit; regenerated with the SDK. -->

# Preview — operations

Accessor: `client.preview` · Source: `src/resources/preview.ts` · 1 operation · Request and error types: namespace `Preview`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cribl-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSystemCapture

- **Signature**: `createSystemCapture(request: Preview.CreateSystemCaptureRequest, options?: RequestOptions): ApiPromise<undefined, Preview.CreateSystemCaptureError>`
- **Wire**: `POST /system/capture`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Preview.CreateSystemCaptureError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Preview.CreateSystemCaptureRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CaptureParamsReq` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CaptureParamsReq` | `captureParamsReqSchema` | `src/models/capture-params-req.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

