using System;
using System.Text.Json.Serialization;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record MappedTenant
{
    [JsonPropertyName("customerId")]
    public required string CustomerId { get; init; }

    [JsonPropertyName("tenantType")]
    public required string TenantType { get; init; }

    [JsonPropertyName("parentTenant")]
    public required string ParentTenant { get; init; }

    [JsonPropertyName("displayName")]
    public required string DisplayName { get; init; }

    [JsonPropertyName("resellerPmaAccountId")]
    public required string ResellerPmaAccountId { get; init; }

    /// <summary>
    /// AWS Organizations Handshake <c>State</c> value, lowercased.
    /// </summary>
    [JsonPropertyName("handshakeState")]
    public required HandshakeState HandshakeState { get; init; }

    [JsonPropertyName("status")]
    public required string Status { get; init; }

    /// <summary>
    /// When the handshake reached a terminal state. <c>null</c> until then.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("effectiveTime")]
    public DateTimeOffset? EffectiveTime { get; init; }
}
