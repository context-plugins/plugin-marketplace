using System.Text.Json.Serialization;
using GoogleCloudApiGateway.Core.Models;

namespace GoogleCloudApiGateway.Models;

/// <summary>
/// An OpenAPI Specification Document describing an API.
/// </summary>
public record ApigatewayApiConfigOpenApiDocument
{
    /// <summary>
    /// The OpenAPI Specification document file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("document")]
    public ApigatewayApiConfigFile3? Document { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
