<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.events` · Source: `code_qr/apis/events.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.events.list_events

- **Route**: `GET /events`
- **Auth**: `token`
- **Signature**: `def list_events(*, event: EventCodeqrIoEventsApiOrStr | None = EventCodeqrIoEventsApi.CLICKS, domain: str | None = None, key: str | None = None, link_id: str | None = None, qrcode_id: str | None = None, page_id: str | None = None, external_id: str | None = None, interval: IntervalCodeqrIoEventsApiOrStr | None = IntervalCodeqrIoEventsApi._24H, start: str | None = None, end: str | None = None, timezone: str | None = "UTC", continent: ContinentCodeOrStr | None = None, country: CountryCodeOrStr | None = None, city: str | None = None, device: str | None = None, browser: str | None = None, os: str | None = None, referer: str | None = None, url: str | None = None, exclude_root: bool | None = None, root: bool | None = None, tag_id: str | None = None, utm_source: str | None = None, utm_medium: str | None = None, utm_campaign: str | None = None, utm_content: str | None = None, utm_term: str | None = None, type_: str | None = None, types: str | None = None, page: float | None = 1.0, limit: float | None = 100.0, order: OrderOrStr | None = Order.DESC, sort_by: SortByOrStr | None = SortBy.TIMESTAMP, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `event` — query · `domain` — query · `key` — query · `link_id` — query `linkId` · `qrcode_id` — query `qrcodeId` · `page_id` — query `pageId` · `external_id` — query `externalId` · `interval` — query · `start` — query · `end` — query · `timezone` — query · `continent` — query · `country` — query · `city` — query · `device` — query · `browser` — query · `os` — query · `referer` — query · `url` — query · `exclude_root` — query `excludeRoot` · `root` — query · `tag_id` — query `tagId` · `utm_source` — query · `utm_medium` — query · `utm_campaign` — query · `utm_content` — query · `utm_term` — query · `type_` — query `type` · `types` — query · `page` — query · `limit` — query · `order` — query · `sort_by` — query `sortBy`
- **Returns (parsed)**: `list[EventsResponse]`
- **Returns (raw)**: `ApiResult[list[EventsResponse], ListEventsErrorBody]`
- **Error**: `ListEventsErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EventCodeqrIoEventsApiOrStr` | `code_qr/models/enums/event_codeqr_io_events_api.py` |
| `IntervalCodeqrIoEventsApiOrStr` | `code_qr/models/enums/interval_codeqr_io_events_api.py` |
| `ContinentCodeOrStr` | `code_qr/models/enums/continent_code.py` |
| `CountryCodeOrStr` | `code_qr/models/enums/country_code.py` |
| `OrderOrStr` | `code_qr/models/enums/order.py` |
| `SortByOrStr` | `code_qr/models/enums/sort_by.py` |
| `EventsResponse` | `code_qr/models/unions/events_response.py` |
| `ListEventsErrorBody` | `code_qr/errors/list_events_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

