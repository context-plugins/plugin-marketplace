namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Tradebalance operation.
/// </summary>
public sealed record TradebalanceRequest
{
    /// <summary>
    /// Optional date in YYYY-MM format for historical lookup. Omit for current data.
    /// </summary>
    public string? Date { get; init; }
}
