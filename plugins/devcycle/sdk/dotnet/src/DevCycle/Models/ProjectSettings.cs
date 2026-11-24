using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record ProjectSettings
{
    [JsonPropertyName("edgeDB")]
    public required EdgeDbSettings EdgeDb { get; init; }

    [JsonPropertyName("optIn")]
    public required OptInSettings OptIn { get; init; }

    [JsonPropertyName("sdkTypeVisibility")]
    public required SdkTypeVisibilitySettings SdkTypeVisibility { get; init; }

    [JsonPropertyName("lifeCycle")]
    public required LifeCycleSettings LifeCycle { get; init; }

    [JsonPropertyName("obfuscation")]
    public required ObfuscationSettings Obfuscation { get; init; }

    [JsonPropertyName("featureApprovalWorkflow")]
    public required FeatureApprovalWorkflowSettings FeatureApprovalWorkflow { get; init; }

    [JsonPropertyName("disablePassthroughRollouts")]
    public required bool DisablePassthroughRollouts { get; init; }

    [JsonPropertyName("staleness")]
    public required StalenessSettings Staleness { get; init; }

    [JsonPropertyName("dynatrace")]
    public required DynatraceProjectSettings Dynatrace { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
