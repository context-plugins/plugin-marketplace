using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// SecurityActionsConfig reflects the current state of the SecurityActions feature. This is a singleton resource: https://google.aip.dev/156
/// </summary>
public record GoogleCloudApigeeV1SecurityActionsConfig
{
    /// <summary>
    /// This is a singleton resource, the name will always be set by SecurityActions and any user input will be ignored. The name is always: <c>organizations/{org}/environments/{env}/security_actions_config</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The flag that controls whether this feature is enabled. This is <c>unset</c> by default. When this flag is <c>false</c>, even if individual rules are enabled, no SecurityActions will be enforced.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    /// <summary>
    /// Output only. The update time for configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
