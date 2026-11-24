namespace ApiVerve.Requests.Networking;

/// <summary>
/// The inputs of the Nameservers operation.
/// </summary>
public sealed record NameserversRequest
{
    /// <summary>
    /// The domain name to lookup nameservers for
    /// </summary>
    public required string Domain { get; init; }
}
