namespace ApiVerve.Requests.Geography;

/// <summary>
/// The inputs of the Countrylookup operation.
/// </summary>
public sealed record CountrylookupRequest
{
    /// <summary>
    /// The Country name or ISO code of the country for which you want to get the data (e.g., USA)
    /// </summary>
    public required string Country { get; init; }

    /// <summary>
    /// Specify if you would like to return all major cities of the country found
    /// </summary>
    public bool? Majorcities { get; init; }
}
