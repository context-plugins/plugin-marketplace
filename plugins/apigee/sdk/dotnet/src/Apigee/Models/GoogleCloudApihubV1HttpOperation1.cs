using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Required. An HTTP Operation.
/// </summary>
public record GoogleCloudApihubV1HttpOperation1
{
    /// <summary>
    /// Optional. The path details for the Operation. Note: Even though this field is optional, it is required for CreateApiOperation API and we will fail the request if not provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("path")]
    public GoogleCloudApihubV1Path2? Path { get; init; }

    /// <summary>
    /// Optional. Operation method Note: Even though this field is optional, it is required for CreateApiOperation API and we will fail the request if not provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("method")]
    public Method? Method { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
