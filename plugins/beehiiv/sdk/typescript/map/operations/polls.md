<!-- Generated file — do not edit; regenerated with the SDK. -->

# Polls — operations

Accessor: `client.polls` · Source: `src/resources/polls.ts` · 3 operations · Request and error types: namespace `Polls`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### index15

- **Signature**: `index15(request: Polls.Index15Request, options?: RequestOptions): ApiPromise<PollsListResponse, Polls.Index15Error>`
- **Wire**: `GET /publications/{publicationId}/polls`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PollsListResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Polls.Index15Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Polls.Index15Request` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes | — |
| `limit` | `query` | — | `number` | no | — |
| `cursor` | `query` | — | `string` | no | — |
| `page` | `query` | — | `number` | no | — |
| `orderBy` | `query` | `order_by` | `PollOrderBy` | no | `PollOrderBy.Created` |
| `direction` | `query` | — | `RequestDirection` | no | `RequestDirection.Asc` |
| `expand` | `query` | `expand[]` | `PollsExpandItems[]` | no | — |
| `postId` | `query` | `post_id` | `string` | no | — |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PollOrderBy` | `pollOrderBySchema` | `src/models/poll-order-by.ts` |
| `RequestDirection` | `requestDirectionSchema` | `src/models/request-direction.ts` |
| `PollsExpandItems` | `pollsExpandItemsSchema` | `src/models/polls-expand-items.ts` |
| `PollsListResponse` | `pollsListResponseSchema` | `src/models/polls-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listResponses

- **Signature**: `listResponses(request: Polls.ListResponsesRequest, options?: RequestOptions): ApiPromise<PollResponsesListResponse, Polls.ListResponsesError>`
- **Wire**: `GET /publications/{publicationId}/polls/{pollId}/responses`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PollResponsesListResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Polls.ListResponsesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Polls.ListResponsesRequest` (10):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes | — |
| `pollId` | `path` | — | `string` | yes | — |
| `limit` | `query` | — | `number` | no | — |
| `cursor` | `query` | — | `string` | no | — |
| `page` | `query` | — | `number` | no | — |
| `orderBy` | `query` | `order_by` | `PollResponsesOrderBy` | no | `PollResponsesOrderBy.Created` |
| `direction` | `query` | — | `RequestDirection` | no | `RequestDirection.Asc` |
| `expand` | `query` | `expand[]` | `PollResponsesExpandItems[]` | no | — |
| `postId` | `query` | `post_id` | `string` | no | — |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PollResponsesOrderBy` | `pollResponsesOrderBySchema` | `src/models/poll-responses-order-by.ts` |
| `RequestDirection` | `requestDirectionSchema` | `src/models/request-direction.ts` |
| `PollResponsesExpandItems` | `pollResponsesExpandItemsSchema` | `src/models/poll-responses-expand-items.ts` |
| `PollResponsesListResponse` | `pollResponsesListResponseSchema` | `src/models/poll-responses-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### show11

- **Signature**: `show11(request: Polls.Show11Request, options?: RequestOptions): ApiPromise<PollShowResponse, Polls.Show11Error>`
- **Wire**: `GET /publications/{publicationId}/polls/{pollId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PollShowResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Polls.Show11Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Polls.Show11Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `pollId` | `path` | — | `string` | yes |
| `expand` | `query` | `expand[]` | `PollsExpandItems[]` | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PollsExpandItems` | `pollsExpandItemsSchema` | `src/models/polls-expand-items.ts` |
| `PollShowResponse` | `pollShowResponseSchema` | `src/models/poll-show-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

