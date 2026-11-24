using Deliverd.Models.Enums;

namespace Deliverd.Requests.Flows;

/// <summary>
/// The inputs of the GetApiV1Flows operation.
/// </summary>
public sealed record GetApiV1FlowsRequest
{
    public int? Limit { get; init; }

    /// <summary>
    /// nextCursor from a previous response. One we did not issue is refused.
    /// </summary>
    public string? Cursor { get; init; }

    public StatusDeliverdDevFlowsApi? Status { get; init; }

    public string? ExternalId { get; init; }
}
