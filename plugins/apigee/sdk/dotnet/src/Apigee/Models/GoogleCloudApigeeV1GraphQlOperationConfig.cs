using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Binds the resources in a proxy or remote service with the GraphQL operation and its associated quota enforcement.
/// </summary>
public record GoogleCloudApigeeV1GraphQlOperationConfig
{
    /// <summary>
    /// Quota parameters to be enforced for the resources, methods, and API source combination. If none are specified, quota enforcement will not be done.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quota")]
    public GoogleCloudApigeeV1Quota1? Quota { get; init; }

    /// <summary>
    /// Required. List of GraphQL name/operation type pairs for the proxy or remote service to which quota will be applied. If only operation types are specified, the quota will be applied to all GraphQL requests irrespective of the GraphQL name. <b>Note</b>: Currently, you can specify only a single GraphQLOperation. Specifying more than one will cause the operation to fail.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operations")]
    public IReadOnlyList<GoogleCloudApigeeV1GraphQlOperation>? Operations { get; init; }

    /// <summary>
    /// Custom attributes associated with the operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public IReadOnlyList<GoogleCloudApigeeV1Attribute>? Attributes { get; init; }

    /// <summary>
    /// Required. Name of the API proxy endpoint or remote service with which the GraphQL operation and quota are associated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiSource")]
    public string? ApiSource { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
