using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// GraphQL documentation for a catalog item.
/// </summary>
public record GoogleCloudApigeeV1GraphqlDocumentation
{
    /// <summary>
    /// Required. The GraphQL endpoint URI to be queried by API consumers. Max length is 2,083 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endpointUri")]
    public string? EndpointUri { get; init; }

    /// <summary>
    /// Required. The documentation file contents for the GraphQL schema.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schema")]
    public GoogleCloudApigeeV1DocumentationFile4? Schema { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
