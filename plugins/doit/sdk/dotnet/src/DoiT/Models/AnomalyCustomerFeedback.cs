using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Current review status of the anomaly, as set in the console or through <c>patchAnomaly</c>. Always present; an anomaly nobody has reviewed yet reports <c>NEEDS_REVIEW</c>.
/// </summary>
public record AnomalyCustomerFeedback
{
    /// <summary>
    /// The anomaly's review state.
    /// </summary>
    [JsonPropertyName("reviewStatus")]
    public required ReviewStatus1 ReviewStatus { get; init; }

    /// <summary>
    /// Whether the anomaly was confirmed as real. Present only when <c>reviewStatus</c> is <c>RESOLVED</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resolution")]
    public Resolution1? Resolution { get; init; }

    /// <summary>
    /// The feedback reason given when the anomaly was resolved. Present only when <c>reviewStatus</c> is <c>RESOLVED</c> and a reason was given. The resolution comment is not included.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resolutionNote")]
    public ResolutionNote1? ResolutionNote { get; init; }

    /// <summary>
    /// Time of the last review-feedback update. Absent when the anomaly was never reviewed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedAt")]
    public DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// Email of the user who made the last review-feedback update. Absent when the anomaly was never reviewed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedBy")]
    public string? UpdatedBy { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
