using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The documentation for a catalog item.
/// </summary>
public record GoogleCloudApigeeV1ApiDocDocumentation
{
    /// <summary>
    /// Optional. AsyncAPI Specification documentation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("asyncApiDocumentation")]
    public GoogleCloudApigeeV1AsyncApiDocumentation2? AsyncApiDocumentation { get; init; }

    /// <summary>
    /// Optional. GraphQL documentation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("graphqlDocumentation")]
    public GoogleCloudApigeeV1GraphqlDocumentation1? GraphqlDocumentation { get; init; }

    /// <summary>
    /// Optional. OpenAPI Specification documentation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oasDocumentation")]
    public GoogleCloudApigeeV1OasDocumentation2? OasDocumentation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
