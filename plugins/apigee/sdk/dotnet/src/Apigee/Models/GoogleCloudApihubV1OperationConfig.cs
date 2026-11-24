using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// API hub Operation config.
/// </summary>
public record GoogleCloudApihubV1OperationConfig
{
    /// <summary>
    /// Full API Hub operation resource name: <c>projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operation")]
    public string? Operation { get; init; }

    /// <summary>
    /// The HTTP operation config.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("httpOperation")]
    public GoogleCloudApihubV1HttpOperationConfig1? HttpOperation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
