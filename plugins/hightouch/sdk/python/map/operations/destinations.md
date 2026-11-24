<!-- Generated file — do not edit; regenerated with the SDK. -->

# Destinations — operations

Accessor: `client.destinations` · Source: `hightouch/apis/destinations.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.destinations.create_destination

- **Route**: `POST /destinations`
- **Auth**: `bearer_auth`
- **Signature**: `def create_destination(body: DestinationCreate | DestinationCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DestinationsResponse1`
- **Returns (raw)**: `ApiResult[DestinationsResponse1, CreateDestinationErrorBody]`
- **Error**: `CreateDestinationErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [409, 422] · `InternalServerErrorOrStr` [500] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `DestinationCreate` | `hightouch/models/destination_create.py` |
| `DestinationCreateDict` | `hightouch/models/destination_create.py` |
| `DestinationsResponse1` | `hightouch/models/unions/destinations_response1.py` |
| `CreateDestinationErrorBody` | `hightouch/errors/create_destination_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

### client.destinations.get_destination

- **Route**: `GET /destinations/{destinationId}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_destination(destination_id: float, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `destination_id`
- **Params**: `destination_id` — path `destinationId`
- **Returns (parsed)**: `Destination`
- **Returns (raw)**: `ApiResult[Destination, GetDestinationErrorBody]`
- **Error**: `GetDestinationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `Destination` | `hightouch/models/destination.py` |
| `GetDestinationErrorBody` | `hightouch/errors/get_destination_error.py` |

### client.destinations.list_destination

- **Route**: `GET /destinations`
- **Auth**: `bearer_auth`
- **Signature**: `def list_destination(*, name: str | None = None, slug: str | None = None, offset: float | None = 0.0, limit: float | None = 100.0, order_by: OrderByHightouchDestinationsApiOrStr | None = OrderByHightouchDestinationsApi.ID, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `name` — query · `slug` — query · `offset` — query · `limit` — query · `order_by` — query `orderBy`
- **Returns (parsed)**: `DestinationsResponse`
- **Returns (raw)**: `ApiResult[DestinationsResponse, ListDestinationErrorBody]`
- **Error**: `ListDestinationErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `OrderByHightouchDestinationsApiOrStr` | `hightouch/models/enums/order_by_hightouch_destinations_api.py` |
| `DestinationsResponse` | `hightouch/models/destinations_response.py` |
| `ListDestinationErrorBody` | `hightouch/errors/list_destination_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |

### client.destinations.update_destination

- **Route**: `PATCH /destinations/{destinationId}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_destination(destination_id: float, body: DestinationUpdate | DestinationUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `destination_id`, `body`
- **Params**: `destination_id` — path `destinationId` · `body` — JSON body
- **Returns (parsed)**: `DestinationsResponse1`
- **Returns (raw)**: `ApiResult[DestinationsResponse1, UpdateDestinationErrorBody]`
- **Error**: `UpdateDestinationErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `InternalServerErrorOrStr` [500] · `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `DestinationUpdate` | `hightouch/models/destination_update.py` |
| `DestinationUpdateDict` | `hightouch/models/destination_update.py` |
| `DestinationsResponse1` | `hightouch/models/unions/destinations_response1.py` |
| `UpdateDestinationErrorBody` | `hightouch/errors/update_destination_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

