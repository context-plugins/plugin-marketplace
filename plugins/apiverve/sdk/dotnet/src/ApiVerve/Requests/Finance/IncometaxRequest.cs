namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Incometax operation.
/// </summary>
public sealed record IncometaxRequest
{
    /// <summary>
    /// The country code (currently only 'US' is supported)
    /// </summary>
    public required string Country { get; init; }

    /// <summary>
    /// The tax year to retrieve brackets for. Defaults to the previous year.
    /// </summary>
    public int? Year { get; init; }
}
