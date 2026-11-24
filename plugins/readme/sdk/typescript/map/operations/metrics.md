<!-- Generated file — do not edit; regenerated with the SDK. -->

# Metrics — operations

Accessor: `client.metrics` · Source: `src/resources/metrics.ts` · 1 operation · Request and error types: namespace `Metrics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `read-me`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postRequest

- **Signature**: `postRequest(request?: Metrics.PostRequestRequest, options?: RequestOptions): ApiPromise<undefined, Metrics.PostRequestError>`
- **Wire**: `POST /request`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"`, an instance of `Metrics.PostRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Metrics.PostRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `MetricsRequest[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricsRequest` | `metricsRequestSchema` | `src/models/metrics-request.ts` |

