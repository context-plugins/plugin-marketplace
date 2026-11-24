using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record PhoneResource
{
    [JsonPropertyName("type")]
    public required string? Type { get; init; }

    [JsonPropertyName("value")]
    public required string? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
