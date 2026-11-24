namespace Audioscrape.Requests.Persons;

/// <summary>
/// The inputs of the GetPersonV1 operation.
/// </summary>
public sealed record GetPersonV1Request
{
    /// <summary>
    /// URL slug from a person search result
    /// </summary>
    public required string PersonSlug { get; init; }
}
