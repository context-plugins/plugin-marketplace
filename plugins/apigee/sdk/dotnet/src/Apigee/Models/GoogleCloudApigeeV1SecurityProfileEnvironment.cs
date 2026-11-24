using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Environment information of attached environments. Scoring an environment is enabled only if it is attached to a security profile.
/// </summary>
public record GoogleCloudApigeeV1SecurityProfileEnvironment
{
    /// <summary>
    /// Output only. Time at which environment was attached to the security profile.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachTime")]
    public string? AttachTime { get; init; }

    /// <summary>
    /// Output only. Name of the environment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environment")]
    public string? Environment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
