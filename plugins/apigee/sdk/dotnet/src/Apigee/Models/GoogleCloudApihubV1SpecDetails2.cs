using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Output only. Details parsed from the spec.
/// </summary>
public record GoogleCloudApihubV1SpecDetails2
{
    /// <summary>
    /// Output only. Additional details apart from <c>OperationDetails</c> parsed from an OpenAPI spec. The OperationDetails parsed from the spec can be obtained by using ListAPIOperations method.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("openApiSpecDetails")]
    public GoogleCloudApihubV1OpenApiSpecDetails2? OpenApiSpecDetails { get; init; }

    /// <summary>
    /// Output only. The description of the spec.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
