namespace ApiVerve.Requests.Geography;

/// <summary>
/// The inputs of the Countryborders operation.
/// </summary>
public sealed record CountrybordersRequest
{
    /// <summary>
    /// The Country 2 Letter ISO code (e.g., CA)
    /// </summary>
    public required string Country { get; init; }
}
