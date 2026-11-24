using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

/// <summary>
/// Flag evaluation success response.
/// </summary>
public record OfrepEvaluationSuccess
{
    /// <summary>
    /// Feature flag key
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    [RegularExpression("^[a-z0-9-_.]+$")]
    public string? Key { get; init; }

    /// <summary>
    /// An OpenFeature reason for the evaluation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApi? Reason { get; init; }

    /// <summary>
    /// Variant of the evaluated flag value
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variant")]
    public string? Variant { get; init; }

    /// <summary>
    /// Arbitrary metadata supporting flag evaluation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public object? Metadata { get; init; }

    /// <summary>
    /// Flag evaluation result
    /// </summary>
    [JsonPropertyName("value")]
    public required bool Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
