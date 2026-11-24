namespace ApiVerve.Requests.DomainData;

/// <summary>
/// The inputs of the Reversednslookup operation.
/// </summary>
public sealed record ReversednslookupRequest
{
    /// <summary>
    /// The IP address to lookup (IPv4 or IPv6)
    /// </summary>
    public required string Ip { get; init; }
}
