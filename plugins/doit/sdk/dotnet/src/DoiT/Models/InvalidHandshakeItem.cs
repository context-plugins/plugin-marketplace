using System.Text.Json.Serialization;

namespace DoiT.Models;

/// <summary>
/// A single batch item that failed validation before processing began.
/// </summary>
public record InvalidHandshakeItem
{
    /// <summary>
    /// Zero-based position of the invalid item within the submitted batch.
    /// </summary>
    [JsonPropertyName("index")]
    public required int Index { get; init; }

    /// <summary>
    /// Present when the invalid item is a reseller-handshake batch item.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resellerCustomerId")]
    public string? ResellerCustomerId { get; init; }

    /// <summary>
    /// Stable machine-readable error code (e.g. <c>duplicate_pma</c>, <c>duplicate_ec_account</c>).
    /// </summary>
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    /// <summary>
    /// Human-readable explanation of why the item is invalid.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public string? Reason { get; init; }
}
