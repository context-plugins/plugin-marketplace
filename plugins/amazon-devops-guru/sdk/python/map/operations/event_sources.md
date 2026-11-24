<!-- Generated file — do not edit; regenerated with the SDK. -->

# EventSources — operations

Accessor: `client.event_sources` · Source: `amazon_dev_ops_guru/apis/event_sources.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.event_sources.describe_event_sources_config

- **Route**: `POST /event-sources`
- **Auth**: `sigv4`
- **Signature**: `def describe_event_sources_config(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `DescribeEventSourcesConfigResponse`
- **Returns (raw)**: `ApiResult[DescribeEventSourcesConfigResponse, DescribeEventSourcesConfigErrorBody]`
- **Error**: `DescribeEventSourcesConfigErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeEventSourcesConfigResponse` | `amazon_dev_ops_guru/models/describe_event_sources_config_response.py` |
| `DescribeEventSourcesConfigErrorBody` | `amazon_dev_ops_guru/errors/describe_event_sources_config_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

### client.event_sources.update_event_sources_config

- **Route**: `PUT /event-sources`
- **Auth**: `sigv4`
- **Signature**: `def update_event_sources_config(*, body: DescribeEventSourcesConfigResponse | DescribeEventSourcesConfigResponseDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, UpdateEventSourcesConfigErrorBody]`
- **Error**: `UpdateEventSourcesConfigErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeEventSourcesConfigResponse` | `amazon_dev_ops_guru/models/describe_event_sources_config_response.py` |
| `DescribeEventSourcesConfigResponseDict` | `amazon_dev_ops_guru/models/describe_event_sources_config_response.py` |
| `UpdateEventSourcesConfigErrorBody` | `amazon_dev_ops_guru/errors/update_event_sources_config_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

