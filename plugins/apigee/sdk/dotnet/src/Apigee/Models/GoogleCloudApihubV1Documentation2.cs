using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Optional. The documentation of the version.
/// </summary>
public record GoogleCloudApihubV1Documentation2
{
    /// <summary>
    /// Optional. The uri of the externally hosted documentation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalUri")]
    public string? ExternalUri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
