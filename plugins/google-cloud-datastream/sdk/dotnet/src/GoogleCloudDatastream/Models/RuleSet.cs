using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// A set of rules to apply to a set of objects.
/// </summary>
public record RuleSet
{
    /// <summary>
    /// Required. List of customization rules to apply.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customizationRules")]
    public IReadOnlyList<CustomizationRule>? CustomizationRules { get; init; }

    /// <summary>
    /// Required. Object filter to apply the customization rules to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("objectFilter")]
    public ObjectFilter1? ObjectFilter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
