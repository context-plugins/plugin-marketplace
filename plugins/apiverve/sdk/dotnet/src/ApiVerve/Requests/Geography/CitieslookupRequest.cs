namespace ApiVerve.Requests.Geography;

/// <summary>
/// The inputs of the Citieslookup operation.
/// </summary>
public sealed record CitieslookupRequest
{
    /// <summary>
    /// The city name for which you want to get the data (e.g., New York)
    /// </summary>
    public required string City { get; init; }

    /// <summary>
    /// Limit number of cities that match your search criteria
    /// </summary>
    public int? Limit { get; init; }
}
