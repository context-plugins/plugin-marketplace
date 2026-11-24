namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Inflation operation.
/// </summary>
public sealed record InflationRequest
{
    /// <summary>
    /// ISO 2-letter country code (e.g., US, GB, JP, DE, BR)
    /// </summary>
    public required string Country { get; init; }

    /// <summary>
    /// The year to retrieve data for. Defaults to the previous year.
    /// </summary>
    public int? Year { get; init; }
}
