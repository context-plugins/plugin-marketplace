namespace ApiVerve.Requests.Parsers;

/// <summary>
/// The inputs of the Streetaddressparser operation.
/// </summary>
public sealed record StreetaddressparserRequest
{
    /// <summary>
    /// The street address to parse
    /// </summary>
    public required string Address { get; init; }
}
