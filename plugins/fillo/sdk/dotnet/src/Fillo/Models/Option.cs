using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record Option
{
    [JsonPropertyName("label")]
    public required string Label { get; init; }

    [JsonPropertyName("value")]
    public required string Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
