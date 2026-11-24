using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record AllowedValue
{
    [JsonPropertyName("label")]
    public required string Label { get; init; }

    [JsonPropertyName("value")]
    public required object Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
