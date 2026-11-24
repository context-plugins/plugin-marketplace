using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record BatchValidateResponse
{
    [JsonPropertyName("updated_count")]
    public required int UpdatedCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
