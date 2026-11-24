using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

/// <summary>
/// The reason the User was Served this particular value
/// </summary>
public record EvalReason
{
    /// <summary>
    /// Evaluation reason
    /// </summary>
    [JsonPropertyName("reason")]
    public required Reason Reason { get; init; }

    /// <summary>
    /// Detailed description of evaluation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("details")]
    public string? Details { get; init; }

    /// <summary>
    /// ID of the targeting rule that matched
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("target_id")]
    public string? TargetId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
