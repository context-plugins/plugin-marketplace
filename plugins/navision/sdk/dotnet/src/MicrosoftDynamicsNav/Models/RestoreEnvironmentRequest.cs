using System;
using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Models;
using MicrosoftDynamicsNav.Models.Enums;

namespace MicrosoftDynamicsNav.Models;

public record RestoreEnvironmentRequest
{
    /// <summary>
    /// Name of the new restored environment
    /// </summary>
    [JsonPropertyName("EnvironmentName")]
    public required string EnvironmentName { get; init; }

    /// <summary>
    /// Type of the new environment
    /// </summary>
    [JsonPropertyName("EnvironmentType")]
    public required EnvironmentType1 EnvironmentType { get; init; }

    /// <summary>
    /// Point in time to restore to (ISO 8601 UTC)
    /// </summary>
    [JsonPropertyName("PointInTime")]
    public required DateTimeOffset PointInTime { get; init; }

    /// <summary>
    /// Whether to uninstall per-tenant extensions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SkipInstallingPTEs")]
    public bool? SkipInstallingPtEs { get; init; } = false;

    /// <summary>
    /// Whether to uninstall third-party AppSource apps
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SkipInstallingThirdPartyGlobalApps")]
    public bool? SkipInstallingThirdPartyGlobalApps { get; init; } = false;

    /// <summary>
    /// Whether to skip execution of cleanup codeunits
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SkipEnvironmentCleanup")]
    public bool? SkipEnvironmentCleanup { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
