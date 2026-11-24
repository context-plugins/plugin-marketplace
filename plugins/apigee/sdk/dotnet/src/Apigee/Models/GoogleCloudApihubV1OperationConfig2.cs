using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Required. The API Hub operation this tool exposes. Each tool wraps exactly one operation; callers that want to expose multiple operations should declare multiple tools.
/// </summary>
public record GoogleCloudApihubV1OperationConfig2
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
