using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Represents the pairing of GraphQL operation types and the GraphQL operation name.
/// </summary>
public record GoogleCloudApigeeV1GraphQlOperation
{
    /// <summary>
    /// Required. GraphQL operation types. Valid values include <c>query</c> or <c>mutation</c>. <b>Note</b>: Apigee does not currently support <c>subscription</c> types.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operationTypes")]
    public IReadOnlyList<string>? OperationTypes { get; init; }

    /// <summary>
    /// GraphQL operation name. The name and operation type will be used to apply quotas. If no name is specified, the quota will be applied to all GraphQL operations irrespective of their operation names in the payload.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operation")]
    public string? Operation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
