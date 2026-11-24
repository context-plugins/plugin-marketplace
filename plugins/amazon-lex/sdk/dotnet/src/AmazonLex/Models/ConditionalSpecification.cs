using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ConditionalSpecification
{
    /// <summary>
    /// Determines whether a conditional branch is active. When active is false, the conditions are not evaluated.
    /// </summary>
    [JsonPropertyName("active")]
    public required bool Active { get; init; }

    /// <summary>
    /// A list of conditional branches. A conditional branch is made up of a condition, a response and a next step. The response and next step are executed when the condition is true.
    /// </summary>
    [JsonPropertyName("conditionalBranches")]
    public required IReadOnlyList<ConditionalBranch> ConditionalBranches { get; init; }

    [JsonPropertyName("defaultBranch")]
    public required DefaultConditionalBranch DefaultBranch { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
