using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Partial review-status update. Fields that are omitted are left unchanged. <c>reviewStatus</c> drives the state machine; <c>resolution</c> and <c>resolutionNote</c> apply only when resolving.
/// </summary>
public record CustomerFeedback
{
    /// <summary>
    /// The review state to move the anomaly to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reviewStatus")]
    public ReviewStatus? ReviewStatus { get; init; }

    /// <summary>
    /// Required when <c>reviewStatus</c> is <c>RESOLVED</c>; forbidden otherwise. Qualifies whether the anomaly was confirmed as real.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resolution")]
    public Resolution? Resolution { get; init; }

    /// <summary>
    /// Optional reason and comment captured on a resolve transition.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resolutionNote")]
    public ResolutionNote? ResolutionNote { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
