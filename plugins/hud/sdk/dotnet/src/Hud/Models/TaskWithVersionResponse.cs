using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record TaskWithVersionResponse
{
    [JsonPropertyName("task")]
    public required TaskResponse Task { get; init; }

    [JsonPropertyName("version")]
    public required TaskVersionResponse Version { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
