using System.Text.Json.Serialization;

namespace DoiT.Models;

/// <summary>
/// Per-outcome counts across the batch. Field names are snake_case, matching the actual wire format returned by this endpoint — an intentional inconsistency with the rest of the payload, which is camelCase.
/// </summary>
public record ResellerHandshakeBatchSummary
{
    [JsonPropertyName("handshake_issued")]
    public required int HandshakeIssued { get; init; }

    [JsonPropertyName("no_op")]
    public required int NoOp { get; init; }

    [JsonPropertyName("mapped")]
    public required int Mapped { get; init; }

    [JsonPropertyName("remapped")]
    public required int Remapped { get; init; }

    [JsonPropertyName("failed")]
    public required int Failed { get; init; }
}
