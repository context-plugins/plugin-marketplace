using System;
using System.Text.Json.Serialization;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record ResellerAccount
{
    /// <summary>
    /// 12-digit AWS account ID of the reseller's program management account.
    /// </summary>
    [JsonPropertyName("resellerPmaAccountId")]
    public required string ResellerPmaAccountId { get; init; }

    [JsonPropertyName("dpmaId")]
    public required string DpmaId { get; init; }

    [JsonPropertyName("handshakeId")]
    public required string HandshakeId { get; init; }

    /// <summary>
    /// AWS Organizations Handshake <c>State</c> value, lowercased.
    /// </summary>
    [JsonPropertyName("handshakeState")]
    public required HandshakeState HandshakeState { get; init; }

    [JsonPropertyName("status")]
    public required StatusDoiTBillingTransferApi Status { get; init; }

    /// <summary>
    /// When the handshake reached a terminal state. <c>null</c> until then.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("effectiveTime")]
    public DateTimeOffset? EffectiveTime { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }
}
