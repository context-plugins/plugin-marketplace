using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record ResellerAccountWithTenants
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
    /// Inherited from the parent DPMA root; the reseller node itself carries no region metadata.
    /// </summary>
    [JsonPropertyName("region")]
    public required string Region { get; init; }

    /// <summary>
    /// Inherited from the parent DPMA root; the reseller node itself carries no IAM metadata.
    /// </summary>
    [JsonPropertyName("iamStatus")]
    public required string IamStatus { get; init; }

    /// <summary>
    /// Inherited from the parent DPMA root. <c>null</c> if never refreshed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastRefreshTime")]
    public DateTimeOffset? LastRefreshTime { get; init; }

    /// <summary>
    /// When the handshake reached a terminal state. <c>null</c> until then.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("effectiveTime")]
    public DateTimeOffset? EffectiveTime { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// Per-AWS-Organizations-handshake-state counts across all tenants mapped to a PMA.
    /// </summary>
    [JsonPropertyName("handshakeStatus")]
    public required HandshakeStatus HandshakeStatus { get; init; }

    [JsonPropertyName("tenants")]
    public required IReadOnlyList<EndCustomerNode> Tenants { get; init; }
}
