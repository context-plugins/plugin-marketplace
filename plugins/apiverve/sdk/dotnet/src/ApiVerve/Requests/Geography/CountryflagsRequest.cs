namespace ApiVerve.Requests.Geography;

/// <summary>
/// The inputs of the Countryflags operation.
/// </summary>
public sealed record CountryflagsRequest
{
    /// <summary>
    /// The 2 letter ISO Country Code (e.g. ZW)
    /// </summary>
    public required string Country { get; init; }

    /// <summary>
    /// The format of the flag image
    /// </summary>
    public required string Format { get; init; }

    /// <summary>
    /// The shape of the flag image
    /// </summary>
    public required string Shape { get; init; }
}
