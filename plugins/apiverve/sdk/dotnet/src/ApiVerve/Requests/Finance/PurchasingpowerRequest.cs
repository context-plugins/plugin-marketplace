namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Purchasingpower operation.
/// </summary>
public sealed record PurchasingpowerRequest
{
    /// <summary>
    /// The dollar amount to convert
    /// </summary>
    public required double Amount { get; init; }

    /// <summary>
    /// Starting year (YYYY format, data available from 1947)
    /// </summary>
    public required string From { get; init; }

    /// <summary>
    /// Ending year (YYYY format). Omit for current.
    /// </summary>
    public string? To { get; init; }
}
