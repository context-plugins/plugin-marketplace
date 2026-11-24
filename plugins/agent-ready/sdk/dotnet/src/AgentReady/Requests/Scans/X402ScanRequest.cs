using AgentReady.Models;

namespace AgentReady.Requests.Scans;

/// <summary>
/// The inputs of the X402Scan operation.
/// </summary>
public sealed record X402ScanRequest
{
    /// <summary>
    /// Base64-encoded signed x402 payment authorization. Omit it to receive the 402 challenge.
    /// </summary>
    public string? XPayment { get; init; }

    public required ApiX402ScanRequest Body { get; init; }
}
