using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Required. Immutable. The entity acting as the consumer in the dependency.
/// </summary>
public record GoogleCloudApihubV1DependencyEntityReference3
{
    /// <summary>
    /// The resource name of an external API in the API Hub. Format: <c>projects/{project}/locations/{location}/externalApis/{external_api}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalApiResourceName")]
    public string? ExternalApiResourceName { get; init; }

    /// <summary>
    /// The resource name of an operation in the API Hub. Format: <c>projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operationResourceName")]
    public string? OperationResourceName { get; init; }

    /// <summary>
    /// Output only. Display name of the entity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
