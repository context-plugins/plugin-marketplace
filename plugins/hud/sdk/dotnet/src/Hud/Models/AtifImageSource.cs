using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models;

public record AtifImageSource
{
    [JsonPropertyName("media_type")]
    public required MediaType MediaType { get; init; }

    [JsonPropertyName("path")]
    public required string Path { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
