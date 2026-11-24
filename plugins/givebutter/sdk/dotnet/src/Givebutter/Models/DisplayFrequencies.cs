using System.Collections.Generic;
using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

/// <summary>
/// Donation frequencies to display. Typical values: <c>once</c>, <c>monthly</c>, <c>quarterly</c>, <c>yearly</c>.
/// </summary>
public record DisplayFrequencies
{
    [JsonPropertyName("name")]
    public string Name { get; } = "display_frequencies";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public IReadOnlyList<string>? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
