using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Models;

namespace MicrosoftDynamicsNav.Models;

public record AppUpdateRequest
{
    /// <summary>
    /// Target version to update to
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetVersion")]
    public string? TargetVersion { get; init; }

    /// <summary>
    /// Whether to allow preview versions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowPreviewVersion")]
    public bool? AllowPreviewVersion { get; init; }

    /// <summary>
    /// Whether to ignore the update window
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ignoreUpgradeWindow")]
    public bool? IgnoreUpgradeWindow { get; init; }

    /// <summary>
    /// Whether to also update dependent apps
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowDependencyUpdate")]
    public bool? AllowDependencyUpdate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
