using System.Text.Json.Serialization;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record ResellerHandshakeResult
{
    [JsonPropertyName("resellerCustomerId")]
    public required string ResellerCustomerId { get; init; }

    [JsonPropertyName("resellerPmaAccountId")]
    public required string ResellerPmaAccountId { get; init; }

    /// <summary>
    /// Outcome of processing this batch item.
    /// </summary>
    [JsonPropertyName("status")]
    public required ResellerHandshakeStatus Status { get; init; }

    /// <summary>
    /// AWS Organizations handshake ID. Absent when no handshake was issued (e.g. <c>no_op</c>, <c>failed</c>, or dry run).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("handshakeId")]
    public string? HandshakeId { get; init; }

    /// <summary>
    /// AWS Organizations Handshake <c>State</c> value, lowercased.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("handshakeState")]
    public HandshakeState? HandshakeState { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public ResellerHandshakeError? Error { get; init; }
}
