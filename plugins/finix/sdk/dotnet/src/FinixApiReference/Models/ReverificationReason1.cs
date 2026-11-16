using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// The reason the payment instrument was re-verified.
/// </summary>
public record ReverificationReason1
{
    /// <summary>
    /// The initiator of the re-verification.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("initiated_by")]
    public string? InitiatedBy { get; init; }

    /// <summary>
    /// A description of the reason for re-verification.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason_description")]
    public string? ReasonDescription { get; init; }

    /// <summary>
    /// The type of review.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("review_type")]
    public string? ReviewType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
