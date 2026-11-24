namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Vatrates operation.
/// </summary>
public sealed record VatratesRequest
{
    /// <summary>
    /// ISO 2-letter country code (e.g., DE, FR, ES)
    /// </summary>
    public required string Country { get; init; }

    /// <summary>
    /// Look up rate effective on this date (YYYY-MM-DD). Defaults to today.
    /// </summary>
    public string? Date { get; init; }

    /// <summary>
    /// Check for regional exceptions (e.g., Canary Islands, Ceuta)
    /// </summary>
    public string? Postcode { get; init; }
}
