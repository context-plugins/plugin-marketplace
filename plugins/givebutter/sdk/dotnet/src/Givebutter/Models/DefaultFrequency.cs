using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

/// <summary>
/// Default donation frequency. Typically <c>once</c>, <c>monthly</c>, <c>quarterly</c>, or <c>yearly</c>.
/// </summary>
public record DefaultFrequency
{
    [JsonPropertyName("name")]
    public string Name { get; } = "default_frequency";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public string? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
