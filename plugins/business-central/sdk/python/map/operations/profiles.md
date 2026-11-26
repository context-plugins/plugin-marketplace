<!-- Generated file — do not edit; regenerated with the SDK. -->

# Profiles — operations

Accessor: `client.profiles` · Source: `dynamics_365_business_central/apis/profiles.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.profiles.list_profiles

- **Route**: `GET /companies({company_id})/profiles`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def list_profiles(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`
- **Params**: `company_id` — path
- **Returns (parsed)**: `CompaniesApiProfilesResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiProfilesResponse, ListProfilesErrorBody]`
- **Error**: `ListProfilesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiProfilesResponse` | `dynamics_365_business_central/models/companies_api_profiles_response.py` |
| `ListProfilesErrorBody` | `dynamics_365_business_central/errors/list_profiles_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

