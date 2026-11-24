using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record IndexingRule
{
    /// <summary>
    /// The name of the indexing rule.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Name")]
    public string? Name { get; init; }

    /// <summary>
    /// Displays when the rule was last modified, in Unix time seconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ModifiedAt")]
    public DateTimeOffset? ModifiedAt { get; init; }

    /// <summary>
    /// Exactly one member is set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Rule")]
    public IndexingRuleValue? Rule { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
