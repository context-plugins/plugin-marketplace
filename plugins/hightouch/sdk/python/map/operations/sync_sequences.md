<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncSequences — operations

Accessor: `client.sync_sequences` · Source: `hightouch/apis/sync_sequences.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.sync_sequences.get_sync_sequence_run

- **Route**: `GET /sync-sequences/runs/{syncSequenceRunId}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_sync_sequence_run(sync_sequence_run_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sync_sequence_run_id`
- **Params**: `sync_sequence_run_id` — path `syncSequenceRunId`
- **Returns (parsed)**: `SyncSequenceStatusOutput`
- **Returns (raw)**: `ApiResult[SyncSequenceStatusOutput, GetSyncSequenceRunErrorBody]`
- **Error**: `GetSyncSequenceRunErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `SyncSequenceStatusOutput` | `hightouch/models/sync_sequence_status_output.py` |
| `GetSyncSequenceRunErrorBody` | `hightouch/errors/get_sync_sequence_run_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |

### client.sync_sequences.trigger_sequence_run

- **Route**: `POST /sync-sequences/{syncSequenceId}/trigger`
- **Auth**: `bearer_auth`
- **Signature**: `def trigger_sequence_run(sync_sequence_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sync_sequence_id`
- **Params**: `sync_sequence_id` — path `syncSequenceId`
- **Returns (parsed)**: `TriggerSequenceRunOutput`
- **Returns (raw)**: `ApiResult[TriggerSequenceRunOutput, TriggerSequenceRunErrorBody]`
- **Error**: `TriggerSequenceRunErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `TriggerSequenceRunOutput` | `hightouch/models/trigger_sequence_run_output.py` |
| `TriggerSequenceRunErrorBody` | `hightouch/errors/trigger_sequence_run_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |

