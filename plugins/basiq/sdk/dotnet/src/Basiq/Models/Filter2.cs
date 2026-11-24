using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.AnyOf;

namespace Basiq.Models;

public record Filter2
{
    /// <summary>
    /// Name of the filter
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public Value1? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
