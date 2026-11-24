using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record UpdateProtectedProjectSettingsDto
{
    [JsonPropertyName("settings")]
    public required ProtectedProjectSettingsDto Settings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
