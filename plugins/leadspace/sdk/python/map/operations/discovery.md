<!-- Generated file — do not edit; regenerated with the SDK. -->

# Discovery — operations

Accessor: `client.discovery` · Source: `leadspace/apis/discovery.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.discovery.discover_company_contacts

- **Route**: `POST /v2/expansion/company`
- **Auth**: `bearer_auth`
- **Signature**: `def discover_company_contacts(body: DiscoveryRequest | DiscoveryRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DiscoveryAccepted`
- **Returns (raw)**: `ApiResult[DiscoveryAccepted, DiscoverCompanyContactsErrorBody]`
- **Error**: `DiscoverCompanyContactsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 427, 500] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `DiscoveryRequest` | `leadspace/models/discovery_request.py` |
| `DiscoveryRequestDict` | `leadspace/models/discovery_request.py` |
| `DiscoveryAccepted` | `leadspace/models/discovery_accepted.py` |
| `DiscoverCompanyContactsErrorBody` | `leadspace/errors/discover_company_contacts_error.py` |
| `Error` | `leadspace/models/error.py` |

