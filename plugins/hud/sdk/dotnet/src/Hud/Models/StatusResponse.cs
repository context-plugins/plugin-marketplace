using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record StatusResponse
{
    [JsonPropertyName("status")]
    public required string Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
