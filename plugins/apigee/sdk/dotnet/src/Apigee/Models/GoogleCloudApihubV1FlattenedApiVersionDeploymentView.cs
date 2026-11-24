using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// A flattened view of an API, its version and one of the linked deployments.
/// </summary>
public record GoogleCloudApihubV1FlattenedApiVersionDeploymentView
{
    /// <summary>
    /// Optional. The version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public GoogleCloudApihubV1Version1? Version { get; init; }

    /// <summary>
    /// Optional. The API.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("api")]
    public GoogleCloudApihubV1Api1? Api { get; init; }

    /// <summary>
    /// Optional. The deployment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deployment")]
    public GoogleCloudApihubV1Deployment2? Deployment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
