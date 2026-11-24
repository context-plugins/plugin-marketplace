<!-- Generated file — do not edit; regenerated with the SDK. -->

# DecisionSessions — operations

Accessor: `client.decisionSessions` · Source: `src/resources/decision-sessions.ts` · 2 operations · Request and error types: namespace `DecisionSessions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1DecisionSessionsById

- **Signature**: `getApiV1DecisionSessionsById(request: DecisionSessions.GetApiV1DecisionSessionsByIdRequest, options?: RequestOptions): ApiPromise<ApiV1DecisionSessionsResponse, DecisionSessions.GetApiV1DecisionSessionsByIdError>`
- **Wire**: `GET /api/v1/decision-sessions/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1DecisionSessionsResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `DecisionSessions.GetApiV1DecisionSessionsByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DecisionSessions.GetApiV1DecisionSessionsByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1DecisionSessionsResponse` | `apiV1DecisionSessionsResponseSchema` | `src/models/api-v1-decision-sessions-response.ts` |

### postApiV1DecisionSessionsByIdExpire

- **Signature**: `postApiV1DecisionSessionsByIdExpire(request: DecisionSessions.PostApiV1DecisionSessionsByIdExpireRequest, options?: RequestOptions): ApiPromise<ApiV1DecisionSessionsExpireResponse, DecisionSessions.PostApiV1DecisionSessionsByIdExpireError>`
- **Wire**: `POST /api/v1/decision-sessions/{id}/expire`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1DecisionSessionsExpireResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `DecisionSessions.PostApiV1DecisionSessionsByIdExpireError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DecisionSessions.PostApiV1DecisionSessionsByIdExpireRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1DecisionSessionsExpireResponse` | `apiV1DecisionSessionsExpireResponseSchema` | `src/models/api-v1-decision-sessions-expire-response.ts` |

