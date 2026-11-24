namespace ApiVerve.Requests.Geography;

/// <summary>
/// The inputs of the Countrylanguages operation.
/// </summary>
public sealed record CountrylanguagesRequest
{
    /// <summary>
    /// The Country 2 letter ISO code for which you want to get languages for data (e.g., ZW)
    /// </summary>
    public required string Country { get; init; }
}
