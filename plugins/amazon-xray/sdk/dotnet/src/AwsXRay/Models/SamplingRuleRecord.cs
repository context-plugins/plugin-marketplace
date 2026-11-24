using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record SamplingRuleRecord
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SamplingRule")]
    public SamplingRule? SamplingRule { get; init; }

    /// <summary>
    /// When the rule was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreatedAt")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// When the rule was last modified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ModifiedAt")]
    public DateTimeOffset? ModifiedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
