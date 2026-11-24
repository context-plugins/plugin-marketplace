using Upstox.Models.Enums;

namespace Upstox.Requests.Ipo;

/// <summary>
/// The inputs of the GetIpoListing operation.
/// </summary>
public sealed record GetIpoListingRequest
{
    /// <summary>
    /// IPO status to filter by
    /// </summary>
    public Status9? Status { get; init; }

    /// <summary>
    /// Issue type filter. <c>regular</c> is a mainboard issue. Returns both when omitted
    /// </summary>
    public IssueType3? IssueType { get; init; }

    /// <summary>
    /// Page number, starting at 1
    /// </summary>
    public string? PageNumber { get; init; }

    /// <summary>
    /// Number of records per page
    /// </summary>
    public string? Records { get; init; }
}
