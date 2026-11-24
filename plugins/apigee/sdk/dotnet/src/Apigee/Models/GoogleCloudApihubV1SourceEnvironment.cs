using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Message representing the source environment details.
/// </summary>
public record GoogleCloudApihubV1SourceEnvironment
{
    /// <summary>
    /// Optional. The time at which the environment was created at the source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// The location where additional information about source environments can be found. The location should be relative path of the environment manifest with respect to a plugin instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceEnvironmentUri")]
    public string? SourceEnvironmentUri { get; init; }

    /// <summary>
    /// Optional. The time at which the environment was last updated at the source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Required. The name of the environment at the source. This should map to Deployment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceEnvironment")]
    public string? SourceEnvironment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
