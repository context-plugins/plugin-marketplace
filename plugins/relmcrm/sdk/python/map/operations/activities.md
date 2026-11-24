<!-- Generated file — do not edit; regenerated with the SDK. -->

# Activities — operations

Accessor: `client.activities` · Source: `relm_crm/apis/activities.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.activities.create_activity

- **Route**: `POST /activities`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def create_activity(body: ActivityInput | ActivityInputDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `Activity`
- **Returns (raw)**: `ApiResult[Activity, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ActivityInput` | `relm_crm/models/activity_input.py` |
| `ActivityInputDict` | `relm_crm/models/activity_input.py` |
| `Activity` | `relm_crm/models/activity.py` |

### client.activities.delete_activity

- **Route**: `DELETE /activities/{id}`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def delete_activity(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Deleted`
- **Returns (raw)**: `ApiResult[Deleted, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Deleted` | `relm_crm/models/deleted.py` |

### client.activities.get_activity

- **Route**: `GET /activities/{id}`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def get_activity(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Activity`
- **Returns (raw)**: `ApiResult[Activity, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Activity` | `relm_crm/models/activity.py` |

### client.activities.list_activities

- **Route**: `GET /activities`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def list_activities(*, limit: int | None = 25, cursor: str | None = None, include_deleted: bool | None = None, contact_id: str | None = None, deal_id: str | None = None, type_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query · `include_deleted` — query · `contact_id` — query · `deal_id` — query · `type_` — query `type`
- **Returns (parsed)**: `ActivityList`
- **Returns (raw)**: `ApiResult[ActivityList, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ActivityList` | `relm_crm/models/activity_list.py` |

### client.activities.restore_activity

- **Route**: `POST /activities/{id}/restore`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def restore_activity(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Activity`
- **Returns (raw)**: `ApiResult[Activity, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Activity` | `relm_crm/models/activity.py` |

### client.activities.update_activity

- **Route**: `PATCH /activities/{id}`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def update_activity(id_: str, body: ActivityInput | ActivityInputDict, *, if_match: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `if_match` — header `If-Match` · `body` — JSON body
- **Returns (parsed)**: `Activity`
- **Returns (raw)**: `ApiResult[Activity, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ActivityInput` | `relm_crm/models/activity_input.py` |
| `ActivityInputDict` | `relm_crm/models/activity_input.py` |
| `Activity` | `relm_crm/models/activity.py` |

