<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analytics — operations

Accessor: `client.analytics` · Source: `code_qr/apis/analytics.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.analytics.retrieve_analytics

- **Route**: `GET /analytics`
- **Auth**: `token`
- **Signature**: `def retrieve_analytics(*, event: EventOrStr | None = Event.CLICKS, group_by: GroupByOrStr | None = GroupBy.COUNT, domain: str | None = None, key: str | None = None, link_id: str | None = None, qrcode_id: str | None = None, page_id: str | None = None, external_id: str | None = None, interval: IntervalOrStr | None = None, start: str | None = None, end: str | None = None, timezone: str | None = "UTC", continent: ContinentCodeOrStr | None = None, country: CountryCodeOrStr | None = None, city: str | None = None, device: str | None = None, browser: str | None = None, os: str | None = None, referer: str | None = None, url: str | None = None, exclude_root: bool | None = None, root: bool | None = None, tag_id: str | None = None, utm_source: str | None = None, utm_medium: str | None = None, utm_campaign: str | None = None, utm_content: str | None = None, utm_term: str | None = None, type_: str | None = None, types: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `event` — query · `group_by` — query `groupBy` · `domain` — query · `key` — query · `link_id` — query `linkId` · `qrcode_id` — query `qrcodeId` · `page_id` — query `pageId` · `external_id` — query `externalId` · `interval` — query · `start` — query · `end` — query · `timezone` — query · `continent` — query · `country` — query · `city` — query · `device` — query · `browser` — query · `os` — query · `referer` — query · `url` — query · `exclude_root` — query `excludeRoot` · `root` — query · `tag_id` — query `tagId` · `utm_source` — query · `utm_medium` — query · `utm_campaign` — query · `utm_content` — query · `utm_term` — query · `type_` — query `type` · `types` — query
- **Returns (parsed)**: `AnalyticsResponse`
- **Returns (raw)**: `ApiResult[AnalyticsResponse, RetrieveAnalyticsErrorBody]`
- **Error**: `RetrieveAnalyticsErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EventOrStr` | `code_qr/models/enums/event.py` |
| `GroupByOrStr` | `code_qr/models/enums/group_by.py` |
| `IntervalOrStr` | `code_qr/models/enums/interval.py` |
| `ContinentCodeOrStr` | `code_qr/models/enums/continent_code.py` |
| `CountryCodeOrStr` | `code_qr/models/enums/country_code.py` |
| `AnalyticsResponse` | `code_qr/models/unions/analytics_response.py` |
| `RetrieveAnalyticsErrorBody` | `code_qr/errors/retrieve_analytics_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

