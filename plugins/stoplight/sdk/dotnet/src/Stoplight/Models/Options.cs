using System.Text.Json.Serialization;
using Stoplight.Core.Models;

namespace Stoplight.Models;

public record Options
{
    /// <summary>
    /// Default: false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("removeExtraEndpoints")]
    public bool? RemoveExtraEndpoints { get; init; }

    /// <summary>
    /// Default: false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("removeExtraSchemas")]
    public bool? RemoveExtraSchemas { get; init; }

    /// <summary>
    /// Default: false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("removeExtraTextSections")]
    public bool? RemoveExtraTextSections { get; init; }

    /// <summary>
    /// Default: false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("removeExtraTraits")]
    public bool? RemoveExtraTraits { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
