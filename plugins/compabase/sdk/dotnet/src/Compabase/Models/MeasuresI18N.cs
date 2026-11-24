using System.Text.Json.Serialization;
using Compabase.Core.Models;

namespace Compabase.Models;

public record MeasuresI18N
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("en")]
    public string? En { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("de")]
    public string? De { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
