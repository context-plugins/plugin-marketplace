<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomBitlinks — operations

Accessor: `client.custom_bitlinks` · Source: `bitly/apis/custom_bitlinks.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.custom_bitlinks.add_custom_bitlink

- **Route**: `POST /custom_bitlinks`
- **Auth**: `bearer_auth`
- **Signature**: `def add_custom_bitlink(body: AddCustomBitlink | AddCustomBitlinkDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CustomBitlinkBitlyCustomBitlinksApi`
- **Returns (raw)**: `ApiResult[CustomBitlinkBitlyCustomBitlinksApi, AddCustomBitlinkErrorBody]`
- **Error**: `AddCustomBitlinkErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 403, 404, 409, 422, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AddCustomBitlink` | `bitly/models/add_custom_bitlink.py` |
| `AddCustomBitlinkDict` | `bitly/models/add_custom_bitlink.py` |
| `CustomBitlinkBitlyCustomBitlinksApi` | `bitly/models/custom_bitlink_bitly_custom_bitlinks_api.py` |
| `AddCustomBitlinkErrorBody` | `bitly/errors/add_custom_bitlink_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.custom_bitlinks.get_clicks_for_custom_bitlink

- **Route**: `GET /custom_bitlinks/{custom_bitlink}/clicks`
- **Auth**: `bearer_auth`
- **Signature**: `def get_clicks_for_custom_bitlink(custom_bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `custom_bitlink`
- **Params**: `custom_bitlink` — path · `unit` — query · `units` — query · `unit_reference` — query
- **Returns (parsed)**: `Clicks`
- **Returns (raw)**: `ApiResult[Clicks, GetClicksForCustomBitlinkErrorBody]`
- **Error**: `GetClicksForCustomBitlinkErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 403, 404, 410, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `Clicks` | `bitly/models/clicks.py` |
| `GetClicksForCustomBitlinkErrorBody` | `bitly/errors/get_clicks_for_custom_bitlink_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.custom_bitlinks.get_custom_bitlink

- **Route**: `GET /custom_bitlinks/{custom_bitlink}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_custom_bitlink(custom_bitlink: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `custom_bitlink`
- **Params**: `custom_bitlink` — path
- **Returns (parsed)**: `CustomBitlinkBitlyCustomBitlinksApi`
- **Returns (raw)**: `ApiResult[CustomBitlinkBitlyCustomBitlinksApi, GetCustomBitlinkErrorBody]`
- **Error**: `GetCustomBitlinkErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [402, 403, 404, 410, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomBitlinkBitlyCustomBitlinksApi` | `bitly/models/custom_bitlink_bitly_custom_bitlinks_api.py` |
| `GetCustomBitlinkErrorBody` | `bitly/errors/get_custom_bitlink_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.custom_bitlinks.get_custom_bitlink_metrics_by_destination

- **Route**: `GET /custom_bitlinks/{custom_bitlink}/clicks_by_destination`
- **Auth**: `bearer_auth`
- **Signature**: `def get_custom_bitlink_metrics_by_destination(custom_bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `custom_bitlink`
- **Params**: `custom_bitlink` — path · `unit` — query · `units` — query · `unit_reference` — query
- **Returns (parsed)**: `ClickMetricsBitlyCustomBitlinksApi`
- **Returns (raw)**: `ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetCustomBitlinkMetricsByDestinationErrorBody]`
- **Error**: `GetCustomBitlinkMetricsByDestinationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [402, 403, 404, 410, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `ClickMetricsBitlyCustomBitlinksApi` | `bitly/models/click_metrics_bitly_custom_bitlinks_api.py` |
| `GetCustomBitlinkMetricsByDestinationErrorBody` | `bitly/errors/get_custom_bitlink_metrics_by_destination_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.custom_bitlinks.update_custom_bitlink

- **Route**: `PATCH /custom_bitlinks/{custom_bitlink}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_custom_bitlink(custom_bitlink: str, body: UpdateCustomBitlink | UpdateCustomBitlinkDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `custom_bitlink`, `body`
- **Params**: `custom_bitlink` — path · `body` — JSON body
- **Returns (parsed)**: `CustomBitlinkBitlyCustomBitlinksApi`
- **Returns (raw)**: `ApiResult[CustomBitlinkBitlyCustomBitlinksApi, UpdateCustomBitlinkErrorBody]`
- **Error**: `UpdateCustomBitlinkErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 403, 404, 422, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateCustomBitlink` | `bitly/models/update_custom_bitlink.py` |
| `UpdateCustomBitlinkDict` | `bitly/models/update_custom_bitlink.py` |
| `CustomBitlinkBitlyCustomBitlinksApi` | `bitly/models/custom_bitlink_bitly_custom_bitlinks_api.py` |
| `UpdateCustomBitlinkErrorBody` | `bitly/errors/update_custom_bitlink_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

