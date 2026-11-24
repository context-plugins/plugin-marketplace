using Deliverd.Models.Enums;

namespace Deliverd.Requests.Collections;

/// <summary>
/// The inputs of the GetApiV1Collections operation.
/// </summary>
public sealed record GetApiV1CollectionsRequest
{
    public int? Limit { get; init; }

    /// <summary>
    /// nextCursor from a previous response. One we did not issue is refused.
    /// </summary>
    public string? Cursor { get; init; }

    public StatusDeliverdDevCollectionsApi? Status { get; init; }

    public string? ExternalId { get; init; }
}
