namespace Upstox.Requests.MutualFund;

/// <summary>
/// The inputs of the GetMutualFundSips operation.
/// </summary>
public sealed record GetMutualFundSipsRequest
{
    /// <summary>
    /// Page number for pagination.
    /// </summary>
    public int PageNumber { get; init; } = 1;

    /// <summary>
    /// no of records in a single page
    /// </summary>
    public int Records { get; init; } = 10;
}
