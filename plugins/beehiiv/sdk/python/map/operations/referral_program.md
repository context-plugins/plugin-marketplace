<!-- Generated file — do not edit; regenerated with the SDK. -->

# ReferralProgram — operations

Accessor: `client.referral_program` · Source: `beehiiv/apis/referral_program.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.referral_program.show14

- **Route**: `GET /publications/{publicationId}/referral_program`
- **Server**: `default`
- **Signature**: `def show14(publication_id: str, authorization: str, *, limit: int | None = None, page: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `limit` — query · `page` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `ReferralProgramGetResponse`
- **Returns (raw)**: `ApiResult[ReferralProgramGetResponse, Show14ErrorBody]`
- **Error**: `Show14ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReferralProgramGetResponse` | `beehiiv/models/referral_program_get_response.py` |
| `Show14ErrorBody` | `beehiiv/errors/show14_error.py` |
| `Error` | `beehiiv/models/error.py` |

