<!-- Generated file — do not edit; regenerated with the SDK. -->

# EntryVariants — operations

Accessor: `client.entry_variants` · Source: `contentstack/apis/entry_variants.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.entry_variants.get_all_entry_variants

- **Route**: `GET /content_types/{content_type_uid}/entries/{entry_uid}/variants`
- **Auth**: `api_key` AND `delivery_token`
- **Server**: `default_contentstack_assets_api`
- **Signature**: `def get_all_entry_variants(content_type_uid: str, entry_uid: str, api_key: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `content_type_uid`, `entry_uid`, `api_key`, `access_token`
- **Params**: `content_type_uid` — path · `entry_uid` — path · `api_key` — header · `access_token` — header
- **Returns (parsed)**: `EntryVariantList`
- **Returns (raw)**: `ApiResult[EntryVariantList, GetAllEntryVariantsErrorBody]`
- **Error**: `GetAllEntryVariantsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackAssetsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EntryVariantList` | `contentstack/models/entry_variant_list.py` |
| `GetAllEntryVariantsErrorBody` | `contentstack/errors/get_all_entry_variants_error.py` |
| `ErrorContentstackAssetsApi` | `contentstack/models/error_contentstack_assets_api.py` |

### client.entry_variants.get_single_entry_variant

- **Route**: `GET /content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}`
- **Auth**: `api_key` AND `delivery_token`
- **Server**: `default_contentstack_assets_api`
- **Signature**: `def get_single_entry_variant(content_type_uid: str, entry_uid: str, variant_uid: str, api_key: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `content_type_uid`, `entry_uid`, `variant_uid`, `api_key`, `access_token`
- **Params**: `content_type_uid` — path · `entry_uid` — path · `variant_uid` — path · `api_key` — header · `access_token` — header
- **Returns (parsed)**: `EntryVariant`
- **Returns (raw)**: `ApiResult[EntryVariant, GetSingleEntryVariantErrorBody]`
- **Error**: `GetSingleEntryVariantErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackAssetsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EntryVariant` | `contentstack/models/entry_variant.py` |
| `GetSingleEntryVariantErrorBody` | `contentstack/errors/get_single_entry_variant_error.py` |
| `ErrorContentstackAssetsApi` | `contentstack/models/error_contentstack_assets_api.py` |

