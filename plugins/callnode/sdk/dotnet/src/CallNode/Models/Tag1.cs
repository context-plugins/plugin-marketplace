using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using CallNode.Core.Models;

namespace CallNode.Models;

public record Tag1
{
    [JsonPropertyName("name")]
    [RegularExpression("^[a-zA-Z0-9_-]{1,256}$")]
    public required string Name { get; init; }

    [JsonPropertyName("value")]
    [RegularExpression("^[a-zA-Z0-9_-]{1,256}$")]
    public required string Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
