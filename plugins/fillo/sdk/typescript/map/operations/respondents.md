<!-- Generated file — do not edit; regenerated with the SDK. -->

# Respondents — operations

Accessor: `client.respondents` · Source: `src/resources/respondents.ts` · 3 operations · Request and error types: namespace `Respondents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `fillo`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### findRespondents

- **Signature**: `findRespondents(request?: Respondents.FindRespondentsRequest, options?: RequestOptions): ApiPromise<ApiV1ManageRespondentsResponse, Respondents.FindRespondentsError>`
- **Wire**: `GET /api/v1/manage/respondents`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ManageRespondentsResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Respondents.FindRespondentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Respondents.FindRespondentsRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `externalId` | `query` | `string` | no | — |
| `email` | `query` | `string` | no | — |
| `cursor` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageRespondentsResponse` | `apiV1ManageRespondentsResponseSchema` | `src/models/api-v1-manage-respondents-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### forgetRespondent

- **Signature**: `forgetRespondent(request: Respondents.ForgetRespondentRequest, options?: RequestOptions): ApiPromise<ApiV1ManageRespondentsResponse1, Respondents.ForgetRespondentError>`
- **Wire**: `DELETE /api/v1/manage/respondents/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageRespondentsResponse1`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Respondents.ForgetRespondentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [413] `Error` · `"error7"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Respondents.ForgetRespondentRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ManageRespondentsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageRespondentsRequest` | `apiV1ManageRespondentsRequestSchema` | `src/models/api-v1-manage-respondents-request.ts` |
| `ApiV1ManageRespondentsResponse1` | `apiV1ManageRespondentsResponse1Schema` | `src/models/api-v1-manage-respondents-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listRespondentResponses

- **Signature**: `listRespondentResponses(request: Respondents.ListRespondentResponsesRequest, options?: RequestOptions): ApiPromise<ResponsePage, Respondents.ListRespondentResponsesError>`
- **Wire**: `GET /api/v1/manage/respondents/{id}/responses`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ResponsePage`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Respondents.ListRespondentResponsesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Respondents.ListRespondentResponsesRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `id` | `path` | `string` | yes | — |
| `cursor` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResponsePage` | `responsePageSchema` | `src/models/response-page.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

