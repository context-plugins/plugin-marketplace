namespace ApiVerve.Requests.Networking;

/// <summary>
/// The inputs of the Tordetect operation.
/// </summary>
public sealed record TordetectRequest
{
    /// <summary>
    /// The IP address to check against the Tor exit node list
    /// </summary>
    public required string Ip { get; init; }
}
