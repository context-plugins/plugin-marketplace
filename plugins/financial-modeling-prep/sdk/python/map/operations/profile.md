<!-- Generated file — do not edit; regenerated with the SDK. -->

# Profile — operations

Accessor: `client.profile` · Source: `financial_modeling_prep/apis/profile.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.profile.get_company_profile

- **Route**: `GET /profile/{symbol}`
- **Auth**: `api_key_query`
- **Signature**: `def get_company_profile(symbol: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `symbol`
- **Params**: `symbol` — path
- **Returns (parsed)**: `list[CompanyProfile]`
- **Returns (raw)**: `ApiResult[list[CompanyProfile], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `CompanyProfile` | `financial_modeling_prep/models/company_profile.py` |

