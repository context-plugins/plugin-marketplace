<!-- Generated file — do not edit; regenerated with the SDK. -->

# ReferralProgram — operations

Accessor: `client.referralProgram` · Source: `src/resources/referral-program.ts` · 1 operation · Request and error types: namespace `ReferralProgram`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### show14

- **Signature**: `show14(request: ReferralProgram.Show14Request, options?: RequestOptions): ApiPromise<ReferralProgramGetResponse, ReferralProgram.Show14Error>`
- **Wire**: `GET /publications/{publicationId}/referral_program`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReferralProgramGetResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `ReferralProgram.Show14Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReferralProgram.Show14Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `page` | `query` | — | `number` | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReferralProgramGetResponse` | `referralProgramGetResponseSchema` | `src/models/referral-program-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

