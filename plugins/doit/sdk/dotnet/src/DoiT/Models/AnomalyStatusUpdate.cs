using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record AnomalyStatusUpdate
{
    /// <summary>
    /// Partial review-status update. Fields that are omitted are left unchanged. <c>reviewStatus</c> drives the state machine; <c>resolution</c> and <c>resolutionNote</c> apply only when resolving.
    /// </summary>
    [JsonPropertyName("customerFeedback")]
    public required CustomerFeedback CustomerFeedback { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
