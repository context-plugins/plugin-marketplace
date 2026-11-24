using Deliverd.Models.Enums;

namespace Deliverd.Requests.Tasks;

/// <summary>
/// The inputs of the GetApiV1Tasks operation.
/// </summary>
public sealed record GetApiV1TasksRequest
{
    public int? Limit { get; init; }

    /// <summary>
    /// nextCursor from a previous response. One we did not issue is refused.
    /// </summary>
    public string? Cursor { get; init; }

    public Status2DeliverdDevTasksApi? Status { get; init; }

    public string? ExternalId { get; init; }

    public string? Q { get; init; }
}
