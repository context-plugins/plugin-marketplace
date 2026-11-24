using System;
using System.Text.Json.Serialization;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record EndCustomerNode
{
    /// <summary>
    /// 12-digit AWS account ID of the end-customer account.
    /// </summary>
    [JsonPropertyName("ecAccountId")]
    public required string EcAccountId { get; init; }

    /// <summary>
    /// DoiT customer ID the end-customer account is mapped to.
    /// </summary>
    [JsonPropertyName("ecCustomerId")]
    public required string EcCustomerId { get; init; }

    [JsonPropertyName("status")]
    public required Status1 Status { get; init; }

    /// <summary>
    /// AWS Organizations Handshake <c>State</c> value, lowercased.
    /// </summary>
    [JsonPropertyName("handshakeState")]
    public required HandshakeState HandshakeState { get; init; }

    [JsonPropertyName("billSourceType")]
    public required string BillSourceType { get; init; }

    /// <summary>
    /// S3 key prefix where this end customer's CUR data lands. Omitted when no path was recorded at mapping time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("curBasePath")]
    public string? CurBasePath { get; init; }

    /// <summary>
    /// When the handshake reached a terminal state. <c>null</c> until then.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("effectiveTime")]
    public DateTimeOffset? EffectiveTime { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// When this mapping's status was last refreshed. <c>null</c> if never refreshed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastRefreshTime")]
    public DateTimeOffset? LastRefreshTime { get; init; }
}
