using Deliverd.Core.Validation.Attributes;
using Deliverd.Models.Enums;

namespace Deliverd.Requests.Reports;

/// <summary>
/// The inputs of the GetApiV1ReportsByIdOrSlugComments operation.
/// </summary>
public sealed record GetApiV1ReportsByIdOrSlugCommentsRequest
{
    public required string IdOrSlug { get; init; }

    /// <summary>
    /// Defaults to open — the threads still needing action
    /// </summary>
    public Status12? Status { get; init; }

    /// <summary>
    /// Rows per page. Above the maximum you get the maximum, not an error.
    /// </summary>
    [Minimum(1)]
    [Maximum(200)]
    public int? Limit { get; init; }

    /// <summary>
    /// nextCursor from a previous response. One we did not issue is refused.
    /// </summary>
    public string? Cursor { get; init; }
}
