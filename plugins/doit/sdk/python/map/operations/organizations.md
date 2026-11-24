<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organizations — operations

Accessor: `client.organizations` · Source: `doi_t/apis/organizations.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.organizations.list_organizations

- **Route**: `GET /iam/v1/organizations`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_organizations(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `IamV1OrganizationsResponse`
- **Returns (raw)**: `ApiResult[IamV1OrganizationsResponse, ListOrganizationsErrorBody]`
- **Error**: `ListOrganizationsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IamV1OrganizationsResponse` | `doi_t/models/iam_v1_organizations_response.py` |
| `ListOrganizationsErrorBody` | `doi_t/errors/list_organizations_error.py` |
| `Error` | `doi_t/models/error.py` |

