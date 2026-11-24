namespace ApiVerve.Requests.Networking;

/// <summary>
/// The inputs of the Tldlookup operation.
/// </summary>
public sealed record TldlookupRequest
{
    /// <summary>
    /// The top-level domain to look up (with or without leading dot)
    /// </summary>
    public required string Tld { get; init; }
}
