namespace ApiVerve.Requests.ReferenceData;

/// <summary>
/// The inputs of the Portnumberlookup operation.
/// </summary>
public sealed record PortnumberlookupRequest
{
    /// <summary>
    /// Port number to lookup
    /// </summary>
    public required int Port { get; init; }
}
