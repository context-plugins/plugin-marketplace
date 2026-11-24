<!-- Generated file — do not edit; regenerated with the SDK. -->

# Engagements — operations

Accessor: `client.engagements` · Source: `src/resources/engagements.ts` · 1 operation · Request and error types: namespace `Engagements`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### index12

- **Signature**: `index12(request: Engagements.Index12Request, options?: RequestOptions): ApiPromise<PublicationEngagementsResponse, Engagements.Index12Error>`
- **Wire**: `GET /publications/{publicationId}/engagements`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicationEngagementsResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Engagements.Index12Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Engagements.Index12Request` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes | — |
| `startDate` | `query` | `start_date` | `string` (date) | no | — |
| `numberOfDays` | `query` | `number_of_days` | `number` | no | — |
| `granularity` | `query` | — | `PublicationEngagementGranularity` | no | — |
| `emailType` | `query` | `email_type` | `PublicationEngagementEmailType` | no | — |
| `direction` | `query` | — | `RequestDirection` | no | `RequestDirection.Asc` |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationEngagementGranularity` | `publicationEngagementGranularitySchema` | `src/models/publication-engagement-granularity.ts` |
| `PublicationEngagementEmailType` | `publicationEngagementEmailTypeSchema` | `src/models/publication-engagement-email-type.ts` |
| `RequestDirection` | `requestDirectionSchema` | `src/models/request-direction.ts` |
| `PublicationEngagementsResponse` | `publicationEngagementsResponseSchema` | `src/models/publication-engagements-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

