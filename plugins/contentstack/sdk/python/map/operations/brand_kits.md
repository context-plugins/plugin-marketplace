<!-- Generated file — do not edit; regenerated with the SDK. -->

# BrandKits — operations

Accessor: `client.brand_kits` · Source: `contentstack/apis/brand_kits.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.brand_kits.create_brand_kit

- **Route**: `POST /v1/brand-kits`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_brand_kit_management_brand_kits_api`
- **Signature**: `def create_brand_kit(organization_uid: str, body: CreateBrandKitRequest | CreateBrandKitRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`, `body`
- **Params**: `organization_uid` — header · `body` — JSON body
- **Returns (parsed)**: `BrandKit`
- **Returns (raw)**: `ApiResult[BrandKit, CreateBrandKitErrorBody]`
- **Error**: `CreateBrandKitErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateBrandKitRequest` | `contentstack/models/create_brand_kit_request.py` |
| `CreateBrandKitRequestDict` | `contentstack/models/create_brand_kit_request.py` |
| `BrandKit` | `contentstack/models/brand_kit.py` |
| `CreateBrandKitErrorBody` | `contentstack/errors/create_brand_kit_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.brand_kits.delete_brand_kit

- **Route**: `DELETE /v1/brand-kits/{brand_kit_uid}`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_brand_kit_management_brand_kits_api`
- **Signature**: `def delete_brand_kit(brand_kit_uid: str, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `brand_kit_uid`, `organization_uid`
- **Params**: `brand_kit_uid` — path · `organization_uid` — header
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteBrandKitErrorBody]`
- **Error**: `DeleteBrandKitErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteBrandKitErrorBody` | `contentstack/errors/delete_brand_kit_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.brand_kits.get_all_brand_kits

- **Route**: `GET /v1/brand-kits`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_brand_kit_management_brand_kits_api`
- **Signature**: `def get_all_brand_kits(organization_uid: str, *, skip: int | None = 0, limit: int | None = 25, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`
- **Params**: `skip` — query · `limit` — query · `organization_uid` — header
- **Returns (parsed)**: `BrandKitList`
- **Returns (raw)**: `ApiResult[BrandKitList, GetAllBrandKitsErrorBody]`
- **Error**: `GetAllBrandKitsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BrandKitList` | `contentstack/models/brand_kit_list.py` |
| `GetAllBrandKitsErrorBody` | `contentstack/errors/get_all_brand_kits_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.brand_kits.get_brand_kit

- **Route**: `GET /v1/brand-kits/{brand_kit_uid}`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_brand_kit_management_brand_kits_api`
- **Signature**: `def get_brand_kit(brand_kit_uid: str, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `brand_kit_uid`, `organization_uid`
- **Params**: `brand_kit_uid` — path · `organization_uid` — header
- **Returns (parsed)**: `BrandKit`
- **Returns (raw)**: `ApiResult[BrandKit, GetBrandKitErrorBody]`
- **Error**: `GetBrandKitErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BrandKit` | `contentstack/models/brand_kit.py` |
| `GetBrandKitErrorBody` | `contentstack/errors/get_brand_kit_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.brand_kits.update_brand_kit

- **Route**: `PUT /v1/brand-kits/{brand_kit_uid}`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_brand_kit_management_brand_kits_api`
- **Signature**: `def update_brand_kit(brand_kit_uid: str, organization_uid: str, body: CreateBrandKitRequest | CreateBrandKitRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `brand_kit_uid`, `organization_uid`, `body`
- **Params**: `brand_kit_uid` — path · `organization_uid` — header · `body` — JSON body
- **Returns (parsed)**: `BrandKit`
- **Returns (raw)**: `ApiResult[BrandKit, UpdateBrandKitErrorBody]`
- **Error**: `UpdateBrandKitErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateBrandKitRequest` | `contentstack/models/create_brand_kit_request.py` |
| `CreateBrandKitRequestDict` | `contentstack/models/create_brand_kit_request.py` |
| `BrandKit` | `contentstack/models/brand_kit.py` |
| `UpdateBrandKitErrorBody` | `contentstack/errors/update_brand_kit_error.py` |
| `Error` | `contentstack/models/error.py` |

