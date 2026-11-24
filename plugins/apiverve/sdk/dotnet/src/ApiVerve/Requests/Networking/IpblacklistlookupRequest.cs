namespace ApiVerve.Requests.Networking;

/// <summary>
/// The inputs of the Ipblacklistlookup operation.
/// </summary>
public sealed record IpblacklistlookupRequest
{
    /// <summary>
    /// The IP address to check against blocklists
    /// </summary>
    public required string Ip { get; init; }
}
