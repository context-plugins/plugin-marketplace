namespace ApiVerve.Requests.Geography;

/// <summary>
/// The inputs of the Countryboundaries operation.
/// </summary>
public sealed record CountryboundariesRequest
{
    /// <summary>
    /// The Country 2 Letter ISO code (e.g., CA)
    /// </summary>
    public required string Country { get; init; }
}
