using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record ProjectSettingsDto
{
    [JsonPropertyName("edgeDB")]
    public required EdgeDbSettingsDto EdgeDb { get; init; }

    [JsonPropertyName("optIn")]
    public required OptInSettingsDto OptIn { get; init; }

    [JsonPropertyName("sdkTypeVisibility")]
    public required SdkTypeVisibilitySettingsDto SdkTypeVisibility { get; init; }

    [JsonPropertyName("lifeCycle")]
    public required LifeCycleSettingsDto LifeCycle { get; init; }

    [JsonPropertyName("obfuscation")]
    public required ObfuscationSettingsDto Obfuscation { get; init; }

    [JsonPropertyName("disablePassthroughRollouts")]
    public required bool DisablePassthroughRollouts { get; init; }

    [JsonPropertyName("dynatrace")]
    public required DynatraceProjectSettingsDto Dynatrace { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
