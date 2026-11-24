using System.Text.Json.Serialization;
using AgentReady.Core.Models;
using AgentReady.Models.Enums;

namespace AgentReady.Models;

/// <summary>
/// Result of a paid scan (x402 or MPP).
/// </summary>
public record PaidScanResponse
{
    /// <summary>
    /// Full scan result. Same shape returned for sync, async, and cached reads.
    /// </summary>
    [JsonPropertyName("scan")]
    public required Scan Scan { get; init; }

    [JsonPropertyName("shareUrl")]
    public required string ShareUrl { get; init; }

    /// <summary>
    /// Signed token letting the payer claim this scan against an account. Present when claim signing is configured.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("claim")]
    public string? Claim { get; init; }

    /// <summary>
    /// Present only when the scan succeeded but on-chain settlement did not. The result is still returned rather than failing a paid caller.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentSettlement")]
    public PaymentSettlement? PaymentSettlement { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
