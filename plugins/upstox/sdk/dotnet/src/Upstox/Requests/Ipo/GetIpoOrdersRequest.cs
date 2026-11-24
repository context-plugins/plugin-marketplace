namespace Upstox.Requests.Ipo;

/// <summary>
/// The inputs of the GetIpoOrders operation.
/// </summary>
public sealed record GetIpoOrdersRequest
{
    /// <summary>
    /// Page number, starting at 1
    /// </summary>
    public string? PageNumber { get; init; }

    /// <summary>
    /// Number of records per page
    /// </summary>
    public string? Records { get; init; }
}
