namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Interestrate operation.
/// </summary>
public sealed record InterestrateRequest
{
    /// <summary>
    /// 2-letter country code
    /// </summary>
    public required string Country { get; init; }

    /// <summary>
    /// Optional month in YYYY-MM format for a historical lookup. Omit for the current rate.
    /// </summary>
    public string? Date { get; init; }
}
