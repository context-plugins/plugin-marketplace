using Deliverd.Core.Validation.Attributes;

namespace Deliverd.Requests.Reports;

/// <summary>
/// The inputs of the GetApiV1Reports operation.
/// </summary>
public sealed record GetApiV1ReportsRequest
{
    /// <summary>
    /// Searches title, slug and description
    /// </summary>
    public string? Q { get; init; }

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
