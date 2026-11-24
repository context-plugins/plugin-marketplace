using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Requests.MonitorApi;

/// <summary>
/// The inputs of the ListMonitorsV1MonitorsGet operation.
/// </summary>
public sealed record ListMonitorsV1MonitorsGetRequest
{
    /// <summary>
    /// Pagination token from <c>next_cursor</c> in a previous response. Omit to start from the most recently created monitor.
    /// </summary>
    public Cursor? Cursor { get; init; }

    /// <summary>
    /// Maximum number of monitors to return. Defaults to 100. Between 1 and 10000.
    /// </summary>
    public Limit? Limit { get; init; }

    /// <summary>
    /// Filter by monitor type. Pass multiple times to filter by multiple values. Omit to return all types.
    /// </summary>
    public Type5VariantCchzdo? Type { get; init; }

    /// <summary>
    /// Filter by monitor status. Pass multiple times to filter by multiple values. Defaults to <c>active</c> only.
    /// </summary>
    public Status11? Status { get; init; }
}
