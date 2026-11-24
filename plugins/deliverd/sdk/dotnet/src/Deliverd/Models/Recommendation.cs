using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Core.Validation.Attributes;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

/// <summary>
/// What your model or decision engine recommends. Shown to the approver as context, never as the decision. Where the organisation has blind review on, a high or critical risk request's recommendation is shown only after the approver records their own view
/// </summary>
public record Recommendation
{
    /// <summary>
    /// approve or reject
    /// </summary>
    [JsonPropertyName("verdict")]
    public required Verdict Verdict { get; init; }

    /// <summary>
    /// The recommendation in a line
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    [MaxLength(300)]
    public string? Summary { get; init; }

    /// <summary>
    /// How sure it is, from 0 to 1
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("confidence")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? Confidence { get; init; }

    /// <summary>
    /// Why, as the system explains it
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rationale")]
    [MaxLength(4000)]
    public string? Rationale { get; init; }

    /// <summary>
    /// Which model or engine made it
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    [MaxLength(100)]
    public string? Source { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
