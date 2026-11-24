using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Optional. Additional external documentation for this operation. For OpenAPI spec, this will map to <c>operation.documentation</c> in the spec.
/// </summary>
public record GoogleCloudApihubV1Documentation8
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
