using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Requests.MonitorApi;

/// <summary>
/// The inputs of the ListMonitorEventsV1MonitorsMonitorIdEventsGet operation.
/// </summary>
public sealed record ListMonitorEventsV1MonitorsMonitorIdEventsGetRequest
{
    public required string MonitorId { get; init; }

    /// <summary>
    /// Filter to a single execution. Values come from <c>event_group_id</c> in webhook events and listed events. Pagination params are ignored when set.
    /// </summary>
    public EventGroupId? EventGroupId { get; init; }

    /// <summary>
    /// Pass <c>next_cursor</c> from a previous response to retrieve more events.
    /// </summary>
    public Cursor1? Cursor { get; init; }

    /// <summary>
    /// Maximum number of events to return. Defaults to 20. Between 1 and 100.
    /// </summary>
    public Limit1? Limit { get; init; }

    /// <summary>
    /// When true, include completion events for executions that ran but detected no material changes. Useful for auditing execution history.
    /// </summary>
    public bool IncludeCompletions { get; init; } = false;
}
