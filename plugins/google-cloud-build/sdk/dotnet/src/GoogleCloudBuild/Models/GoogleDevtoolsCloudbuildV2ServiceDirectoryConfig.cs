using System.Text.Json.Serialization;
using GoogleCloudBuild.Core.Models;

namespace GoogleCloudBuild.Models;

/// <summary>
/// ServiceDirectoryConfig represents Service Directory configuration for a connection.
/// </summary>
public record GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig
{
    /// <summary>
    /// Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("service")]
    public string? Service { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
