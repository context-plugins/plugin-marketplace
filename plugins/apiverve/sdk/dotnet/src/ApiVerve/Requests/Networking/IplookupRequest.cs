namespace ApiVerve.Requests.Networking;

/// <summary>
/// The inputs of the Iplookup operation.
/// </summary>
public sealed record IplookupRequest
{
    /// <summary>
    /// The IP address for which you want to get the location data (e.g., 173.172.81.20)
    /// </summary>
    public required string Ip { get; init; }
}
