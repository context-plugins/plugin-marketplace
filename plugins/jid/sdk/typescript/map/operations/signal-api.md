<!-- Generated file — do not edit; regenerated with the SDK. -->

# SignalApi — operations

Accessor: `client.signalApi` · Source: `src/resources/signal-api.ts` · 1 operation · Request and error types: namespace `SignalApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `jid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### signal

- **Signature**: `signal(request?: SignalApi.SignalRequest, options?: RequestOptions): ApiPromise<V1SignalResponse, SignalApi.SignalError>`
- **Wire**: `GET /v1/signal`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1SignalResponse`
- **Error**: `JidError` with `kind: "api"`, an instance of `SignalApi.SignalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignalApi.SignalRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `tz` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SignalResponse` | `v1SignalResponseSchema` | `src/models/v1-signal-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

