using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record Feature
{
    /// <summary>
    /// unique database id
    /// </summary>
    [JsonPropertyName("_id")]
    public required string Id { get; init; }

    /// <summary>
    /// Unique key by Project, can be used in the SDK / API to reference by 'key' rather than _id.
    /// </summary>
    [JsonPropertyName("key")]
    [RegularExpression("^[a-z0-9-_.]+$")]
    public required string Key { get; init; }

    /// <summary>
    /// Feature type
    /// </summary>
    [JsonPropertyName("type")]
    public required Type1 Type { get; init; }

    /// <summary>
    /// Bucketed feature variation ID
    /// </summary>
    [JsonPropertyName("_variation")]
    public required string Variation { get; init; }

    /// <summary>
    /// Bucketed feature variation Name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variationName")]
    public string? VariationName { get; init; }

    /// <summary>
    /// Bucketed feature variation Key
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variationKey")]
    public string? VariationKey { get; init; }

    /// <summary>
    /// The reason the User was Served this particular value
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eval")]
    public EvalReason? Eval { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
