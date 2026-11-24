namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Globalstockmarket operation.
/// </summary>
public sealed record GlobalstockmarketRequest
{
    /// <summary>
    /// ISO 2-letter country code
    /// </summary>
    public required string Country { get; init; }

    /// <summary>
    /// Year to retrieve data for (2000-present). Requires month parameter.
    /// </summary>
    public int? Year { get; init; }

    /// <summary>
    /// Month to retrieve data for (1-12). Required when year is specified.
    /// </summary>
    public int? Month { get; init; }
}
