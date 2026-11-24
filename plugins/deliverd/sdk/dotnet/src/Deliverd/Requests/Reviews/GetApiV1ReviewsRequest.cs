using System;
using Deliverd.Models.Enums;

namespace Deliverd.Requests.Reviews;

/// <summary>
/// The inputs of the GetApiV1Reviews operation.
/// </summary>
public sealed record GetApiV1ReviewsRequest
{
    public int? Limit { get; init; }

    /// <summary>
    /// nextCursor from a previous response. One we did not issue is refused.
    /// </summary>
    public string? Cursor { get; init; }

    public StatusDeliverdDevReviewsApi? Status { get; init; }

    public string? ExternalId { get; init; }

    public Guid? ReportId { get; init; }
}
