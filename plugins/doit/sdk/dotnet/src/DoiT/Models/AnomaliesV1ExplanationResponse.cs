using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record AnomaliesV1ExplanationResponse
{
    /// <summary>
    /// Deterministic facts about the anomaly, not AI-generated.
    /// </summary>
    [JsonPropertyName("facts")]
    public required Facts Facts { get; init; }

    /// <summary>
    /// Customer-scoped identifiers the explanation was grounded in.
    /// </summary>
    [JsonPropertyName("evidence")]
    public required IReadOnlyList<Evidence> Evidence { get; init; }

    /// <summary>
    /// The AI-generated portion of the response.
    /// </summary>
    [JsonPropertyName("explanation")]
    public required Explanation Explanation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
