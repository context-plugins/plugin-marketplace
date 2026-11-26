using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Models;

namespace Dynamics365BusinessCentral.Models;

public record AppInstallRequest
{
    /// <summary>
    /// Version to install
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
    /// Whether the ISV EULA is accepted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("acceptIsvEula")]
    public bool? AcceptIsvEula { get; init; }

    /// <summary>
    /// Whether to also update dependent apps
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowDependencyUpdate")]
    public bool? AllowDependencyUpdate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
