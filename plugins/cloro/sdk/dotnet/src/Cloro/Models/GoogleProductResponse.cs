using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record GoogleProductResponse
{
    [JsonPropertyName("success")]
    public required bool Success { get; init; }

    [JsonPropertyName("result")]
    public required Result8 Result { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
