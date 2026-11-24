namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Population operation.
/// </summary>
public sealed record PopulationRequest
{
    /// <summary>
    /// ISO 2 or 3-letter country code (e.g., US, USA, GB, GBR)
    /// </summary>
    public required string Country { get; init; }

    /// <summary>
    /// Specific year to retrieve data for (1960-present). Returns latest if not specified.
    /// </summary>
    public int? Year { get; init; }
}
