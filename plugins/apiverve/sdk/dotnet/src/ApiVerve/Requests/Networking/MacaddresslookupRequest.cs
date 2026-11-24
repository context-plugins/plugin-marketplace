namespace ApiVerve.Requests.Networking;

/// <summary>
/// The inputs of the Macaddresslookup operation.
/// </summary>
public sealed record MacaddresslookupRequest
{
    /// <summary>
    /// The MAC address for which you want to get the data (e.g., 00-B0-D0-63-C2-26)
    /// </summary>
    public required string Mac { get; init; }
}
