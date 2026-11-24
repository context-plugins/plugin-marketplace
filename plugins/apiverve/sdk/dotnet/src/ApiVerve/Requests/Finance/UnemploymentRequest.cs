namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Unemployment operation.
/// </summary>
public sealed record UnemploymentRequest
{
    /// <summary>
    /// ISO country code (2 or 3 letter). Examples: US, USA, DE, DEU, GB, GBR
    /// </summary>
    public required string Country { get; init; }

    /// <summary>
    /// Specific year to retrieve data for (1991-present). Returns latest if not specified.
    /// </summary>
    public int? Year { get; init; }
}
