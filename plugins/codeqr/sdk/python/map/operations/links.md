<!-- Generated file — do not edit; regenerated with the SDK. -->

# Links — operations

Accessor: `client.links` · Source: `code_qr/apis/links.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.links.bulk_create_links

- **Route**: `POST /links/bulk`
- **Auth**: `token`
- **Signature**: `def bulk_create_links(*, body: list[LinksBulkRequest | LinksBulkRequestDict] | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `list[LinksBulkResponse1]`
- **Returns (raw)**: `ApiResult[list[LinksBulkResponse1], BulkCreateLinksErrorBody]`
- **Error**: `BulkCreateLinksErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LinksBulkRequest` | `code_qr/models/links_bulk_request.py` |
| `LinksBulkRequestDict` | `code_qr/models/links_bulk_request.py` |
| `LinksBulkResponse1` | `code_qr/models/unions/links_bulk_response1.py` |
| `BulkCreateLinksErrorBody` | `code_qr/errors/bulk_create_links_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

### client.links.bulk_delete_links

- **Route**: `DELETE /links/bulk`
- **Auth**: `token`
- **Signature**: `def bulk_delete_links(link_ids: list[str], *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `link_ids`
- **Params**: `link_ids` — query `linkIds`
- **Returns (parsed)**: `LinksBulkResponse`
- **Returns (raw)**: `ApiResult[LinksBulkResponse, BulkDeleteLinksErrorBody]`
- **Error**: `BulkDeleteLinksErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LinksBulkResponse` | `code_qr/models/links_bulk_response.py` |
| `BulkDeleteLinksErrorBody` | `code_qr/errors/bulk_delete_links_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

### client.links.create_link

- **Route**: `POST /links`
- **Auth**: `token`
- **Signature**: `def create_link(*, body: LinksRequest | LinksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `LinkCodeqrIoLinksApi`
- **Returns (raw)**: `ApiResult[LinkCodeqrIoLinksApi, CreateLinkErrorBody]`
- **Error**: `CreateLinkErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LinksRequest` | `code_qr/models/links_request.py` |
| `LinksRequestDict` | `code_qr/models/links_request.py` |
| `LinkCodeqrIoLinksApi` | `code_qr/models/link_codeqr_io_links_api.py` |
| `CreateLinkErrorBody` | `code_qr/errors/create_link_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

### client.links.delete_link

- **Route**: `DELETE /links/{linkId}`
- **Auth**: `token`
- **Signature**: `def delete_link(link_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `link_id`
- **Params**: `link_id` — path `linkId`
- **Returns (parsed)**: `LinksResponse`
- **Returns (raw)**: `ApiResult[LinksResponse, DeleteLinkErrorBody]`
- **Error**: `DeleteLinkErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LinksResponse` | `code_qr/models/links_response.py` |
| `DeleteLinkErrorBody` | `code_qr/errors/delete_link_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

### client.links.get_link_info

- **Route**: `GET /links/info`
- **Auth**: `token`
- **Signature**: `def get_link_info(project_slug: str, domain: str, key: str, *, link_id: str | None = None, external_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_slug`, `domain`, `key`
- **Params**: `project_slug` — query `projectSlug` · `domain` — query · `key` — query · `link_id` — query `linkId` · `external_id` — query `externalId`
- **Returns (parsed)**: `LinkCodeqrIoLinksApi`
- **Returns (raw)**: `ApiResult[LinkCodeqrIoLinksApi, GetLinkInfoErrorBody]`
- **Error**: `GetLinkInfoErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LinkCodeqrIoLinksApi` | `code_qr/models/link_codeqr_io_links_api.py` |
| `GetLinkInfoErrorBody` | `code_qr/errors/get_link_info_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

### client.links.get_links

- **Route**: `GET /links`
- **Auth**: `token`
- **Signature**: `def get_links(*, project_slug: str | None = None, domain: str | None = None, tag_id: str | None = None, tag_ids: TagIdsModel | TagIdsModelDict | None = None, tag_names: TagNames | TagNamesDict | None = None, folder_id: str | None = None, search: str | None = None, user_id: str | None = None, show_archived: bool | None = False, password: str | None = None, expires_at: RFC3339DateTime | None = None, geo: Geo1 | Geo1Dict | None = None, ios: str | None = None, android: str | None = None, comments: str | None = None, with_tags: bool | None = False, track_conversion: bool | None = False, use_as_template: bool | None = None, has_password: bool | None = None, has_expiration: bool | None = None, has_utm: bool | None = None, has_custom_social: bool | None = None, has_geo: bool | None = None, has_device: bool | None = None, has_comments: bool | None = None, has_tags: bool | None = None, created_after: RFC3339DateTime | None = None, created_before: RFC3339DateTime | None = None, expires_after: RFC3339DateTime | None = None, expires_before: RFC3339DateTime | None = None, clicks_min: int | None = None, clicks_max: int | None = None, utm_source: str | None = None, utm_medium: str | None = None, utm_campaign: str | None = None, utm_content: str | None = None, utm_term: str | None = None, sort: SortOrStr | None = Sort.CREATED_AT, link_ids: LinkIds | LinkIdsDict | None = None, page: float | None = 1.0, page_size: float | None = 100.0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `project_slug` — query `projectSlug` · `domain` — query · `tag_id` — query `tagId` · `tag_ids` — query `tagIds` · `tag_names` — query `tagNames` · `folder_id` — query `folderId` · `search` — query · `user_id` — query `userId` · `show_archived` — query `showArchived` · `password` — query · `expires_at` — query `expiresAt` · `geo` — query · `ios` — query · `android` — query · `comments` — query · `with_tags` — query `withTags` · `track_conversion` — query `trackConversion` · `use_as_template` — query `useAsTemplate` · `has_password` — query `hasPassword` · `has_expiration` — query `hasExpiration` · `has_utm` — query `hasUTM` · `has_custom_social` — query `hasCustomSocial` · `has_geo` — query `hasGeo` · `has_device` — query `hasDevice` · `has_comments` — query `hasComments` · `has_tags` — query `hasTags` · `created_after` — query `createdAfter` · `created_before` — query `createdBefore` · `expires_after` — query `expiresAfter` · `expires_before` — query `expiresBefore` · `clicks_min` — query `clicksMin` · `clicks_max` — query `clicksMax` · `utm_source` — query · `utm_medium` — query · `utm_campaign` — query · `utm_content` — query · `utm_term` — query · `sort` — query · `link_ids` — query `linkIds` · `page` — query · `page_size` — query `pageSize`
- **Returns (parsed)**: `list[LinkCodeqrIoLinksApi]`
- **Returns (raw)**: `ApiResult[list[LinkCodeqrIoLinksApi], GetLinksErrorBody]`
- **Error**: `GetLinksErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TagIdsModel` | `code_qr/models/unions/tag_ids_model.py` |
| `TagIdsModelDict` | `code_qr/models/unions/tag_ids_model.py` |
| `TagNames` | `code_qr/models/unions/tag_names.py` |
| `TagNamesDict` | `code_qr/models/unions/tag_names.py` |
| `Geo1` | `code_qr/models/geo1.py` |
| `Geo1Dict` | `code_qr/models/geo1.py` |
| `SortOrStr` | `code_qr/models/enums/sort.py` |
| `LinkIds` | `code_qr/models/unions/link_ids.py` |
| `LinkIdsDict` | `code_qr/models/unions/link_ids.py` |
| `LinkCodeqrIoLinksApi` | `code_qr/models/link_codeqr_io_links_api.py` |
| `GetLinksErrorBody` | `code_qr/errors/get_links_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

### client.links.get_links_count

- **Route**: `GET /links/count`
- **Auth**: `token`
- **Signature**: `def get_links_count(*, project_slug: str | None = None, domain: str | None = None, tag_id: str | None = None, tag_ids: TagIdsModel | TagIdsModelDict | None = None, tag_names: TagNames | TagNamesDict | None = None, folder_id: str | None = None, search: str | None = None, user_id: str | None = None, show_archived: bool | None = False, password: str | None = None, expires_at: RFC3339DateTime | None = None, geo: Geo1 | Geo1Dict | None = None, ios: str | None = None, android: str | None = None, comments: str | None = None, with_tags: bool | None = False, track_conversion: bool | None = False, use_as_template: bool | None = None, has_password: bool | None = None, has_expiration: bool | None = None, has_utm: bool | None = None, has_custom_social: bool | None = None, has_geo: bool | None = None, has_device: bool | None = None, has_comments: bool | None = None, has_tags: bool | None = None, created_after: RFC3339DateTime | None = None, created_before: RFC3339DateTime | None = None, expires_after: RFC3339DateTime | None = None, expires_before: RFC3339DateTime | None = None, clicks_min: int | None = None, clicks_max: int | None = None, utm_source: str | None = None, utm_medium: str | None = None, utm_campaign: str | None = None, utm_content: str | None = None, utm_term: str | None = None, group_by: GroupBy4 | GroupBy4Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `project_slug` — query `projectSlug` · `domain` — query · `tag_id` — query `tagId` · `tag_ids` — query `tagIds` · `tag_names` — query `tagNames` · `folder_id` — query `folderId` · `search` — query · `user_id` — query `userId` · `show_archived` — query `showArchived` · `password` — query · `expires_at` — query `expiresAt` · `geo` — query · `ios` — query · `android` — query · `comments` — query · `with_tags` — query `withTags` · `track_conversion` — query `trackConversion` · `use_as_template` — query `useAsTemplate` · `has_password` — query `hasPassword` · `has_expiration` — query `hasExpiration` · `has_utm` — query `hasUTM` · `has_custom_social` — query `hasCustomSocial` · `has_geo` — query `hasGeo` · `has_device` — query `hasDevice` · `has_comments` — query `hasComments` · `has_tags` — query `hasTags` · `created_after` — query `createdAfter` · `created_before` — query `createdBefore` · `expires_after` — query `expiresAfter` · `expires_before` — query `expiresBefore` · `clicks_min` — query `clicksMin` · `clicks_max` — query `clicksMax` · `utm_source` — query · `utm_medium` — query · `utm_campaign` — query · `utm_content` — query · `utm_term` — query · `group_by` — query `groupBy`
- **Returns (parsed)**: `float`
- **Returns (raw)**: `ApiResult[float, GetLinksCountErrorBody]`
- **Error**: `GetLinksCountErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TagIdsModel` | `code_qr/models/unions/tag_ids_model.py` |
| `TagIdsModelDict` | `code_qr/models/unions/tag_ids_model.py` |
| `TagNames` | `code_qr/models/unions/tag_names.py` |
| `TagNamesDict` | `code_qr/models/unions/tag_names.py` |
| `Geo1` | `code_qr/models/geo1.py` |
| `Geo1Dict` | `code_qr/models/geo1.py` |
| `GroupBy4` | `code_qr/models/unions/group_by4.py` |
| `GroupBy4Dict` | `code_qr/models/unions/group_by4.py` |
| `GetLinksCountErrorBody` | `code_qr/errors/get_links_count_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

### client.links.update_link

- **Route**: `PUT /links/{linkId}`
- **Auth**: `token`
- **Signature**: `def update_link(link_id: str, *, body: LinksRequest1 | LinksRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `link_id`
- **Params**: `link_id` — path `linkId` · `body` — JSON body
- **Returns (parsed)**: `LinkCodeqrIoLinksApi`
- **Returns (raw)**: `ApiResult[LinkCodeqrIoLinksApi, UpdateLinkErrorBody]`
- **Error**: `UpdateLinkErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LinksRequest1` | `code_qr/models/links_request1.py` |
| `LinksRequest1Dict` | `code_qr/models/links_request1.py` |
| `LinkCodeqrIoLinksApi` | `code_qr/models/link_codeqr_io_links_api.py` |
| `UpdateLinkErrorBody` | `code_qr/errors/update_link_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

