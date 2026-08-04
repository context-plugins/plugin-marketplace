# Records (`WorkspaceCumulativeStatistics` … `WorkspaceStatistics`)

**Exact coverage: `WorkspaceCumulativeStatistics` through `WorkspaceStatistics`**, alphabetical — these are the literal first and last record names on this page; a name outside that range is on a neighbouring page.

Plain `record` data models (immutable, `init`-only). Each field is `CSharpName (wire_name): Type` —
the parenthesized name is the JSON wire name (`[JsonPropertyName]`). `!req` = C# `required` (must be
set in the object initializer); a trailing `?` on the type = nullable/optional; a field with neither
is optional with a generated default — where the source declares an explicit default it is shown as
`= value`. Summary is the record's XML doc summary (`—` when the source has none). Error-payload
models (the `out` types named by the operation pages' error accessors) are listed here like any
other record. A field whose type is a `OneOf`/`AnyOf` union is tagged `(union)` — construct and
read it via `unions.md` (factories + `TryGet…`), not as a record.
All records on these pages live in namespace `TwilioApis.Models`.

| Record | Summary | Fields | Source |
|---|---|---|---|
| `WorkspaceCumulativeStatistics` | — | `AccountSid (account_sid): string?`, `AvgTaskAcceptanceTime (avg_task_acceptance_time): int? = 0`, `StartTime (start_time): DateTimeOffset?`, `EndTime (end_time): DateTimeOffset?`, `ReservationsCreated (reservations_created): int? = 0`, `ReservationsAccepted (reservations_accepted): int? = 0`, `ReservationsRejected (reservations_rejected): int? = 0`, `ReservationsTimedOut (reservations_timed_out): int? = 0`, `ReservationsCanceled (reservations_canceled): int? = 0`, `ReservationsRescinded (reservations_rescinded): int? = 0`, `SplitByWaitTime (split_by_wait_time): object?`, `WaitDurationUntilAccepted (wait_duration_until_accepted): object?`, `WaitDurationUntilCanceled (wait_duration_until_canceled): object?`, `TasksCanceled (tasks_canceled): int? = 0`, `TasksCompleted (tasks_completed): int? = 0`, `TasksCreated (tasks_created): int? = 0`, `TasksDeleted (tasks_deleted): int? = 0`, `TasksMoved (tasks_moved): int? = 0`, `TasksTimedOutInWorkflow (tasks_timed_out_in_workflow): int? = 0`, `WorkspaceSid (workspace_sid): string?`, `Url (url): string?` | `Models/WorkspaceCumulativeStatistics.cs` |
| `WorkspaceRealTimeStatistics` | — | `AccountSid (account_sid): string?`, `ActivityStatistics (activity_statistics): IReadOnlyList<object?>?`, `LongestTaskWaitingAge (longest_task_waiting_age): int? = 0`, `LongestTaskWaitingSid (longest_task_waiting_sid): string?`, `TasksByPriority (tasks_by_priority): object?`, `TasksByStatus (tasks_by_status): object?`, `TotalTasks (total_tasks): int? = 0`, `TotalWorkers (total_workers): int? = 0`, `WorkspaceSid (workspace_sid): string?`, `Url (url): string?` | `Models/WorkspaceRealTimeStatistics.cs` |
| `WorkspaceStatistics` | — | `Realtime (realtime): object?`, `Cumulative (cumulative): object?`, `AccountSid (account_sid): string?`, `WorkspaceSid (workspace_sid): string?`, `Url (url): string?` | `Models/WorkspaceStatistics.cs` |
