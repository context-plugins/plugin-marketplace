<!-- Generated file — do not edit; regenerated with the SDK. -->

# QrCodes — operations

Accessor: `client.qr_codes` · Source: `code_qr/apis/qr_codes.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.qr_codes.bulk_create_qr_codes

- **Route**: `POST /qrcodes/bulk`
- **Auth**: `token`
- **Signature**: `def bulk_create_qr_codes(*, body: list[QrcodesBulkRequest | QrcodesBulkRequestDict] | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `list[QrcodesBulkResponse1]`
- **Returns (raw)**: `ApiResult[list[QrcodesBulkResponse1], BulkCreateQrCodesErrorBody]`
- **Error**: `BulkCreateQrCodesErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QrcodesBulkRequest` | `code_qr/models/qrcodes_bulk_request.py` |
| `QrcodesBulkRequestDict` | `code_qr/models/qrcodes_bulk_request.py` |
| `QrcodesBulkResponse1` | `code_qr/models/unions/qrcodes_bulk_response1.py` |
| `BulkCreateQrCodesErrorBody` | `code_qr/errors/bulk_create_qr_codes_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

### client.qr_codes.bulk_delete_qr_codes

- **Route**: `DELETE /qrcodes/bulk`
- **Auth**: `token`
- **Signature**: `def bulk_delete_qr_codes(qrcode_ids: list[str], *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `qrcode_ids`
- **Params**: `qrcode_ids` — query `qrcodeIds`
- **Returns (parsed)**: `QrcodesBulkResponse`
- **Returns (raw)**: `ApiResult[QrcodesBulkResponse, BulkDeleteQrCodesErrorBody]`
- **Error**: `BulkDeleteQrCodesErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QrcodesBulkResponse` | `code_qr/models/qrcodes_bulk_response.py` |
| `BulkDeleteQrCodesErrorBody` | `code_qr/errors/bulk_delete_qr_codes_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

### client.qr_codes.create_qr_code

- **Route**: `POST /qrcodes`
- **Auth**: `token`
- **Signature**: `def create_qr_code(*, body: QrcodesRequest | QrcodesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `QrCode`
- **Returns (raw)**: `ApiResult[QrCode, CreateQrCodeErrorBody]`
- **Error**: `CreateQrCodeErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QrcodesRequest` | `code_qr/models/qrcodes_request.py` |
| `QrcodesRequestDict` | `code_qr/models/qrcodes_request.py` |
| `QrCode` | `code_qr/models/qr_code.py` |
| `CreateQrCodeErrorBody` | `code_qr/errors/create_qr_code_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

### client.qr_codes.delete_qr_code

- **Route**: `DELETE /qrcodes/{qrcodeId}`
- **Auth**: `token`
- **Signature**: `def delete_qr_code(qrcode_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `qrcode_id`
- **Params**: `qrcode_id` — path `qrcodeId`
- **Returns (parsed)**: `QrcodesResponse`
- **Returns (raw)**: `ApiResult[QrcodesResponse, DeleteQrCodeErrorBody]`
- **Error**: `DeleteQrCodeErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QrcodesResponse` | `code_qr/models/qrcodes_response.py` |
| `DeleteQrCodeErrorBody` | `code_qr/errors/delete_qr_code_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

### client.qr_codes.get_qr_code_info

- **Route**: `GET /qrcodes/info`
- **Auth**: `token`
- **Signature**: `def get_qr_code_info(project_slug: str, domain: str, key: str, *, qr_code_id: str | None = None, external_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_slug`, `domain`, `key`
- **Params**: `project_slug` — query `projectSlug` · `domain` — query · `key` — query · `qr_code_id` — query `qrCodeId` · `external_id` — query `externalId`
- **Returns (parsed)**: `QrCode`
- **Returns (raw)**: `ApiResult[QrCode, GetQrCodeInfoErrorBody]`
- **Error**: `GetQrCodeInfoErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QrCode` | `code_qr/models/qr_code.py` |
| `GetQrCodeInfoErrorBody` | `code_qr/errors/get_qr_code_info_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

### client.qr_codes.get_qr_codes

- **Route**: `GET /qrcodes`
- **Auth**: `token`
- **Signature**: `def get_qr_codes(*, project_slug: str | None = None, domain: str | None = None, tag_id: str | None = None, tag_ids: TagIdsModel | TagIdsModelDict | None = None, tag_names: TagNames | TagNamesDict | None = None, folder_id: str | None = None, search: str | None = None, user_id: str | None = None, show_archived: bool | None = False, comments: str | None = None, password: str | None = None, expires_at: RFC3339DateTime | None = None, track_conversion: bool | None = False, with_tags: bool | None = False, use_as_template: bool | None = None, format_: FormatOrStr | None = None, type_: Type2OrStr | None = None, has_password: bool | None = None, has_expiration: bool | None = None, has_utm: bool | None = None, has_custom_social: bool | None = None, has_geo: bool | None = None, has_device: bool | None = None, has_comments: bool | None = None, has_tags: bool | None = None, created_after: RFC3339DateTime | None = None, created_before: RFC3339DateTime | None = None, expires_after: RFC3339DateTime | None = None, expires_before: RFC3339DateTime | None = None, scans_min: int | None = None, scans_max: int | None = None, utm_source: str | None = None, utm_medium: str | None = None, utm_campaign: str | None = None, utm_content: str | None = None, utm_term: str | None = None, sort: SortCodeqrIoQrCodesApiOrStr | None = SortCodeqrIoQrCodesApi.CREATED_AT, page: float | None = 1.0, page_size: float | None = 100.0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `project_slug` — query `projectSlug` · `domain` — query · `tag_id` — query `tagId` · `tag_ids` — query `tagIds` · `tag_names` — query `tagNames` · `folder_id` — query `folderId` · `search` — query · `user_id` — query `userId` · `show_archived` — query `showArchived` · `comments` — query · `password` — query · `expires_at` — query `expiresAt` · `track_conversion` — query `trackConversion` · `with_tags` — query `withTags` · `use_as_template` — query `useAsTemplate` · `format_` — query `format` · `type_` — query `type` · `has_password` — query `hasPassword` · `has_expiration` — query `hasExpiration` · `has_utm` — query `hasUTM` · `has_custom_social` — query `hasCustomSocial` · `has_geo` — query `hasGeo` · `has_device` — query `hasDevice` · `has_comments` — query `hasComments` · `has_tags` — query `hasTags` · `created_after` — query `createdAfter` · `created_before` — query `createdBefore` · `expires_after` — query `expiresAfter` · `expires_before` — query `expiresBefore` · `scans_min` — query `scansMin` · `scans_max` — query `scansMax` · `utm_source` — query · `utm_medium` — query · `utm_campaign` — query · `utm_content` — query · `utm_term` — query · `sort` — query · `page` — query · `page_size` — query `pageSize`
- **Returns (parsed)**: `list[QrCode]`
- **Returns (raw)**: `ApiResult[list[QrCode], GetQrCodesErrorBody]`
- **Error**: `GetQrCodesErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TagIdsModel` | `code_qr/models/unions/tag_ids_model.py` |
| `TagIdsModelDict` | `code_qr/models/unions/tag_ids_model.py` |
| `TagNames` | `code_qr/models/unions/tag_names.py` |
| `TagNamesDict` | `code_qr/models/unions/tag_names.py` |
| `FormatOrStr` | `code_qr/models/enums/format.py` |
| `Type2OrStr` | `code_qr/models/enums/type2.py` |
| `SortCodeqrIoQrCodesApiOrStr` | `code_qr/models/enums/sort_codeqr_io_qr_codes_api.py` |
| `QrCode` | `code_qr/models/qr_code.py` |
| `GetQrCodesErrorBody` | `code_qr/errors/get_qr_codes_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

### client.qr_codes.get_qr_codes_count

- **Route**: `GET /qrcodes/count`
- **Auth**: `token`
- **Signature**: `def get_qr_codes_count(*, project_slug: str | None = None, domain: str | None = None, tag_id: str | None = None, tag_ids: TagIdsModel | TagIdsModelDict | None = None, tag_names: TagNames | TagNamesDict | None = None, folder_id: str | None = None, search: str | None = None, user_id: str | None = None, show_archived: bool | None = False, comments: str | None = None, password: str | None = None, expires_at: RFC3339DateTime | None = None, track_conversion: bool | None = False, with_tags: bool | None = False, use_as_template: bool | None = None, format_: FormatOrStr | None = None, type_: Type2OrStr | None = None, has_password: bool | None = None, has_expiration: bool | None = None, has_utm: bool | None = None, has_custom_social: bool | None = None, has_geo: bool | None = None, has_device: bool | None = None, has_comments: bool | None = None, has_tags: bool | None = None, created_after: RFC3339DateTime | None = None, created_before: RFC3339DateTime | None = None, expires_after: RFC3339DateTime | None = None, expires_before: RFC3339DateTime | None = None, scans_min: int | None = None, scans_max: int | None = None, utm_source: str | None = None, utm_medium: str | None = None, utm_campaign: str | None = None, utm_content: str | None = None, utm_term: str | None = None, group_by: GroupBy4CodeqrIoQrCodesApi | GroupBy4CodeqrIoQrCodesApiDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `project_slug` — query `projectSlug` · `domain` — query · `tag_id` — query `tagId` · `tag_ids` — query `tagIds` · `tag_names` — query `tagNames` · `folder_id` — query `folderId` · `search` — query · `user_id` — query `userId` · `show_archived` — query `showArchived` · `comments` — query · `password` — query · `expires_at` — query `expiresAt` · `track_conversion` — query `trackConversion` · `with_tags` — query `withTags` · `use_as_template` — query `useAsTemplate` · `format_` — query `format` · `type_` — query `type` · `has_password` — query `hasPassword` · `has_expiration` — query `hasExpiration` · `has_utm` — query `hasUTM` · `has_custom_social` — query `hasCustomSocial` · `has_geo` — query `hasGeo` · `has_device` — query `hasDevice` · `has_comments` — query `hasComments` · `has_tags` — query `hasTags` · `created_after` — query `createdAfter` · `created_before` — query `createdBefore` · `expires_after` — query `expiresAfter` · `expires_before` — query `expiresBefore` · `scans_min` — query `scansMin` · `scans_max` — query `scansMax` · `utm_source` — query · `utm_medium` — query · `utm_campaign` — query · `utm_content` — query · `utm_term` — query · `group_by` — query `groupBy`
- **Returns (parsed)**: `float`
- **Returns (raw)**: `ApiResult[float, GetQrCodesCountErrorBody]`
- **Error**: `GetQrCodesCountErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TagIdsModel` | `code_qr/models/unions/tag_ids_model.py` |
| `TagIdsModelDict` | `code_qr/models/unions/tag_ids_model.py` |
| `TagNames` | `code_qr/models/unions/tag_names.py` |
| `TagNamesDict` | `code_qr/models/unions/tag_names.py` |
| `FormatOrStr` | `code_qr/models/enums/format.py` |
| `Type2OrStr` | `code_qr/models/enums/type2.py` |
| `GroupBy4CodeqrIoQrCodesApi` | `code_qr/models/unions/group_by4_codeqr_io_qr_codes_api.py` |
| `GroupBy4CodeqrIoQrCodesApiDict` | `code_qr/models/unions/group_by4_codeqr_io_qr_codes_api.py` |
| `GetQrCodesCountErrorBody` | `code_qr/errors/get_qr_codes_count_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

### client.qr_codes.update_qr_code

- **Route**: `PUT /qrcodes/{qrcodeId}`
- **Auth**: `token`
- **Signature**: `def update_qr_code(qrcode_id: str, *, body: QrcodesRequest1 | QrcodesRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `qrcode_id`
- **Params**: `qrcode_id` — path `qrcodeId` · `body` — JSON body
- **Returns (parsed)**: `QrCode`
- **Returns (raw)**: `ApiResult[QrCode, UpdateQrCodeErrorBody]`
- **Error**: `UpdateQrCodeErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QrcodesRequest1` | `code_qr/models/qrcodes_request1.py` |
| `QrcodesRequest1Dict` | `code_qr/models/qrcodes_request1.py` |
| `QrCode` | `code_qr/models/qr_code.py` |
| `UpdateQrCodeErrorBody` | `code_qr/errors/update_qr_code_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

