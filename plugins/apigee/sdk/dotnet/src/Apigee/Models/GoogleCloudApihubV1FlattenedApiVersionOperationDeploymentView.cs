using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// A flattened view of an API, its version, one of its operations and one of the linked deployments. If there are no deployments linked to the operation then the result will be empty.
/// </summary>
public record GoogleCloudApihubV1FlattenedApiVersionOperationDeploymentView
{
    /// <summary>
    /// Optional. The deployment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deployment")]
    public GoogleCloudApihubV1Deployment2? Deployment { get; init; }

    /// <summary>
    /// Optional. The API.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("api")]
    public GoogleCloudApihubV1Api1? Api { get; init; }

    /// <summary>
    /// Optional. The version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public GoogleCloudApihubV1Version1? Version { get; init; }

    /// <summary>
    /// Optional. The API operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiOperation")]
    public GoogleCloudApihubV1ApiOperation2? ApiOperation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
