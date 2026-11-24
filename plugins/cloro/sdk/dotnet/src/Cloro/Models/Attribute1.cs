using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record Attribute1
{
    [JsonPropertyName("label")]
    public required string Label { get; init; }

    [JsonPropertyName("value")]
    public required string Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
