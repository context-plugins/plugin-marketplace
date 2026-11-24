<!-- Generated file — do not edit; regenerated with the SDK. -->

# Actions — operations

Accessor: `client.actions` · Source: `src/resources/actions.ts` · 2 operations · Request types: namespace `Actions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Actions

- **Signature**: `getApiV1Actions(request?: Actions.GetApiV1ActionsRequest, options?: RequestOptions): ApiPromise<ApiV1ActionsResponse1, ApiError>`
- **Wire**: `GET /api/v1/actions`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ActionsResponse1`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Actions.GetApiV1ActionsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `limit` | `query` | `number` | no |
| `cursor` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ActionsResponse1` | `apiV1ActionsResponse1Schema` | `src/models/api-v1-actions-response1.ts` |

### postApiV1Actions

- **Signature**: `postApiV1Actions(request?: Actions.PostApiV1ActionsRequest, options?: RequestOptions): ApiPromise<ApiV1ActionsResponse, ApiError>`
- **Wire**: `POST /api/v1/actions`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ActionsResponse`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Actions.PostApiV1ActionsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1ActionsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ActionsRequest` | `apiV1ActionsRequestSchema` | `src/models/api-v1-actions-request.ts` |
| `ApiV1ActionsResponse` | `apiV1ActionsResponseSchema` | `src/models/api-v1-actions-response.ts` |

