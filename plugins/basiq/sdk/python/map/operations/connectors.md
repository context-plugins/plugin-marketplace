<!-- Generated file — do not edit; regenerated with the SDK. -->

# Connectors — operations

Accessor: `client.connectors` · Source: `basiq/apis/connectors.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.connectors.get_connector

- **Route**: `GET /connectors/{connectorId}/{method}`
- **Auth**: `services_token`
- **Signature**: `def get_connector(connector_id: str, method: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `connector_id`, `method`
- **Params**: `connector_id` — path `connectorId` · `method` — path
- **Returns (parsed)**: `ConnectorsResponse1`
- **Returns (raw)**: `ApiResult[ConnectorsResponse1, GetConnectorErrorBody]`
- **Error**: `GetConnectorErrorBody` — **Case A (typed)**
- **Error arms**: `Connectors400Error1` [400] · `Connectors401Error1` [401] · `Connectors404Error1` [404] · `Connectors500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ConnectorsResponse1` | `basiq/models/connectors_response1.py` |
| `GetConnectorErrorBody` | `basiq/errors/get_connector_error.py` |
| `Connectors400Error1` | `basiq/models/connectors400_error1.py` |
| `Connectors401Error1` | `basiq/models/connectors401_error1.py` |
| `Connectors404Error1` | `basiq/models/connectors404_error1.py` |
| `Connectors500Error1` | `basiq/models/connectors500_error1.py` |

### client.connectors.get_connectors

- **Route**: `GET /connectors`
- **Auth**: `services_token`
- **Signature**: `def get_connectors(*, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `filter_` — query `filter`
- **Returns (parsed)**: `ConnectorsResponse`
- **Returns (raw)**: `ApiResult[ConnectorsResponse, GetConnectorsErrorBody]`
- **Error**: `GetConnectorsErrorBody` — **Case A (typed)**
- **Error arms**: `Connectors400Error1` [400] · `Connectors401Error1` [401] · `Connectors404Error1` [404] · `Connectors500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ConnectorsResponse` | `basiq/models/connectors_response.py` |
| `GetConnectorsErrorBody` | `basiq/errors/get_connectors_error.py` |
| `Connectors400Error1` | `basiq/models/connectors400_error1.py` |
| `Connectors401Error1` | `basiq/models/connectors401_error1.py` |
| `Connectors404Error1` | `basiq/models/connectors404_error1.py` |
| `Connectors500Error1` | `basiq/models/connectors500_error1.py` |

