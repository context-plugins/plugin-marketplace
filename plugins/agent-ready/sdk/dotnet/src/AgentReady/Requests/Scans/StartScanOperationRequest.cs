using System.ComponentModel.DataAnnotations;
using AgentReady.Models;

namespace AgentReady.Requests.Scans;

/// <summary>
/// The inputs of the StartScan operation.
/// </summary>
public sealed record StartScanOperationRequest
{
    /// <summary>
    /// Optional client-generated key (1-255 chars, [A-Za-z0-9_-]) that makes this POST safe to retry. The same key replays the original response.
    /// </summary>
    [StringLength(255, MinimumLength = 1)]
    public string? IdempotencyKey { get; init; }

    public required StartScanRequest Body { get; init; }
}
