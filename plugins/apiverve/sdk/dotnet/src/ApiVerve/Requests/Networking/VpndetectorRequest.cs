namespace ApiVerve.Requests.Networking;

/// <summary>
/// The inputs of the Vpndetector operation.
/// </summary>
public sealed record VpndetectorRequest
{
    /// <summary>
    /// The IP address you want to check for VPN usage
    /// </summary>
    public required string Ip { get; init; }
}
