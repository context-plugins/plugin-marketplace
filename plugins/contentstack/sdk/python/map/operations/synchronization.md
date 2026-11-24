<!-- Generated file — do not edit; regenerated with the SDK. -->

# Synchronization — operations

Accessor: `client.synchronization` · Source: `contentstack/apis/synchronization.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.synchronization.sync_content

- **Route**: `GET /stacks/sync`
- **Auth**: `api_key` AND `delivery_token`
- **Server**: `default_contentstack_assets_api`
- **Signature**: `def sync_content(api_key: str, access_token: str, *, init: bool | None = None, sync_token: str | None = None, pagination_token: str | None = None, type_: Type1ContentstackContentDeliverySynchronizationApiOrStr | None = None, content_type_uid: str | None = None, locale: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_key`, `access_token`
- **Params**: `init` — query · `sync_token` — query · `pagination_token` — query · `type_` — query `type` · `content_type_uid` — query · `locale` — query · `api_key` — header · `access_token` — header
- **Returns (parsed)**: `SyncResponse`
- **Returns (raw)**: `ApiResult[SyncResponse, SyncContentErrorBody]`
- **Error**: `SyncContentErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackAssetsApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Type1ContentstackContentDeliverySynchronizationApiOrStr` | `contentstack/models/enums/type1_contentstack_content_delivery_synchronization_api.py` |
| `SyncResponse` | `contentstack/models/sync_response.py` |
| `SyncContentErrorBody` | `contentstack/errors/sync_content_error.py` |
| `ErrorContentstackAssetsApi` | `contentstack/models/error_contentstack_assets_api.py` |

