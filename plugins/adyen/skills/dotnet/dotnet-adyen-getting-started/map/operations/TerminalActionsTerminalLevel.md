# TerminalActionsTerminalLevel — operations

Accessor: `client.TerminalActionsTerminalLevel` · Source: `Api/TerminalActionsTerminalLevel.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostTerminalsScheduleActions
- **HTTP**: `POST /terminals/scheduleActions` (Default (balanceplatform-api-test))
- **Notes**: Schedules a terminal action by specifying the action and the terminals that the action must be applied to. The following restrictions apply: * You can schedule only one action at a time. For example, to install a new app version and remove an old app version, you have to make two API requests. * The maximum number of terminals in a request is 100 . For example, to apply an action to 250 terminals, you have to divide the terminals over three API requests. * If there is an error with one or more terminal IDs in the request, the action is scheduled for none of the terminals. You need to fix the error and try again. To make this request, your API credential must have the following role : * Management API—Terminal actions read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `PostTerminalsScheduleActions(ScheduleTerminalActionsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ScheduleTerminalActionsResponse`
- **Error**: `SdkException<PostTerminalsScheduleActionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
