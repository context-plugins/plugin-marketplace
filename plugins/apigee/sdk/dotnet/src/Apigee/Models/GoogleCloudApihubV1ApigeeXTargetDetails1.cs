using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Optional. The target Apigee X configuration.
/// </summary>
public record GoogleCloudApihubV1ApigeeXTargetDetails1
{
    /// <summary>
    /// Required. The runtime project that hosts the Apigee X organization. This must be one of the runtime projects attached to the API Hub host project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetProject")]
    public string? TargetProject { get; init; }

    /// <summary>
    /// Required. This name identifies the proxy resource in Apigee. It typically follows a standard alphanumeric format (e.g., "mcp-discovery-server").
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("proxy")]
    public string? Proxy { get; init; }

    /// <summary>
    /// Required. The specific Apigee environment where the server will be deployed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environment")]
    public string? Environment { get; init; }

    /// <summary>
    /// Output only. The revision number of the Apigee proxy that was deployed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deployedRevision")]
    public string? DeployedRevision { get; init; }

    /// <summary>
    /// Optional. Metadata for the proxy configuration in Apigee X.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public GoogleCloudApihubV1MetaData2? Metadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
