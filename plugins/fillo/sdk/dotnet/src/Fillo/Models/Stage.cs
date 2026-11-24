using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record Stage
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("label")]
    public required string Label { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
