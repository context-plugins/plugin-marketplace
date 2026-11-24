using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DoiT.Models;

public record ResellerHandshakeBatchResult
{
    [JsonPropertyName("dpmaId")]
    public required string DpmaId { get; init; }

    [JsonPropertyName("results")]
    public required IReadOnlyList<ResellerHandshakeResult> Results { get; init; }

    /// <summary>
    /// Per-outcome counts across the batch. Field names are snake_case, matching the actual wire format returned by this endpoint — an intentional inconsistency with the rest of the payload, which is camelCase.
    /// </summary>
    [JsonPropertyName("summary")]
    public required ResellerHandshakeBatchSummary Summary { get; init; }
}
