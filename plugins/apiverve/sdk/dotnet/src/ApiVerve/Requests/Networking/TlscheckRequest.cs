namespace ApiVerve.Requests.Networking;

/// <summary>
/// The inputs of the Tlscheck operation.
/// </summary>
public sealed record TlscheckRequest
{
    /// <summary>
    /// The domain to check the TLS/SSL configuration for
    /// </summary>
    public required string Domain { get; init; }

    /// <summary>
    /// The port to connect to (usually 443 for HTTPS)
    /// </summary>
    public int? Port { get; init; }
}
