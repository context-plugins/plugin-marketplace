using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.AnyOf;

namespace DevCycle.Models;

public record UpdateFeatureVariationDto
{
    /// <summary>
    /// Unique key by Feature, can be used in the SDK / API to reference by 'key' rather than _id.
    /// Must only contain lower-case characters and <c>_</c>, <c>-</c> or <c>.</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    [StringLength(100, MinimumLength = 1)]
    [RegularExpression("^[a-z0-9-_.]+$")]
    public string? Key { get; init; }

    /// <summary>
    /// Variation display name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [StringLength(100, MinimumLength = 1)]
    public string? Name { get; init; }

    /// <summary>
    /// A key-value map of variables to their value for this variation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variables")]
    public IReadOnlyDictionary<string, Variables>? Variables { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_id")]
    public string? Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
