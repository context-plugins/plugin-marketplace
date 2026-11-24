using System.Text.Json.Serialization;
using CompSniper.Core.Models;
using CompSniper.Models.Enums;

namespace CompSniper.Models;

public record Requirement
{
    [JsonPropertyName("type")]
    public required TypeEnum Type { get; init; }

    [JsonPropertyName("code")]
    public required string Code { get; init; }

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
