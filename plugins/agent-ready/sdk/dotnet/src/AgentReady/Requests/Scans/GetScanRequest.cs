namespace AgentReady.Requests.Scans;

/// <summary>
/// The inputs of the GetScan operation.
/// </summary>
public sealed record GetScanRequest
{
    /// <summary>
    /// Scan id.
    /// </summary>
    public required string Id { get; init; }
}
