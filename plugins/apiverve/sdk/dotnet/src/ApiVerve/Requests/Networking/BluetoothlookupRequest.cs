namespace ApiVerve.Requests.Networking;

/// <summary>
/// The inputs of the Bluetoothlookup operation.
/// </summary>
public sealed record BluetoothlookupRequest
{
    /// <summary>
    /// The Bluetooth SIG company identifier (decimal or hex with 0x prefix). For example, 76 or 0x4C for Apple.
    /// </summary>
    public required string Companyid { get; init; }
}
