using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record SdkTypeVisibilitySettings
{
    [JsonPropertyName("enabledInFeatureSettings")]
    public required bool EnabledInFeatureSettings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
