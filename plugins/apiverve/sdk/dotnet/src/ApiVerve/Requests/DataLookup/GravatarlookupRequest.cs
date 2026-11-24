namespace ApiVerve.Requests.DataLookup;

/// <summary>
/// The inputs of the Gravatarlookup operation.
/// </summary>
public sealed record GravatarlookupRequest
{
    /// <summary>
    /// The email address to lookup the Gravatar profile of
    /// </summary>
    public required string Email { get; init; }
}
