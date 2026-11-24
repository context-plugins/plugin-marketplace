using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for GetApiSecurityRuntimeConfig[EnvironmentService.GetApiSecurityRuntimeConfig].
/// </summary>
public record GoogleCloudApigeeV1ApiSecurityRuntimeConfig
{
    /// <summary>
    /// Time that the API Security Runtime configuration was updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Unique ID for the API Security Runtime configuration. The ID will only change if the environment is deleted and recreated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uid")]
    public string? Uid { get; init; }

    /// <summary>
    /// A list of up to 5 Cloud Storage Blobs that contain SecurityActions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public IReadOnlyList<string>? Location { get; init; }

    /// <summary>
    /// Revision ID of the API Security Runtime configuration. The higher the value, the more recently the configuration was deployed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revisionId")]
    public string? RevisionId { get; init; }

    /// <summary>
    /// Name of the environment API Security Runtime configuration resource. Format: <c>organizations/{org}/environments/{env}/apiSecurityRuntimeConfig</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
