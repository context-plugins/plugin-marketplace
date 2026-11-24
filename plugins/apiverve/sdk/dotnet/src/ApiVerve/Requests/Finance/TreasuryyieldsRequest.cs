namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Treasuryyields operation.
/// </summary>
public sealed record TreasuryyieldsRequest
{
    /// <summary>
    /// Optional month in YYYY-MM format for a recent-month lookup (recent months only). Omit for current data.
    /// </summary>
    public string? Date { get; init; }

    /// <summary>
    /// Optional filter for a single point. Legacy security types: bills, notes, bonds, tips, frn. Or a maturity: 1mo, 3mo, 6mo, 1yr, 2yr, 3yr, 5yr, 7yr, 10yr, 20yr, 30yr
    /// </summary>
    public string? Type { get; init; }
}
