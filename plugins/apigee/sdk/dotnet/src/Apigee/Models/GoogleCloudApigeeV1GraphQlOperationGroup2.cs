using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Configuration used to group Apigee proxies or remote services with graphQL operation name, graphQL operation type and quotas. This grouping allows us to precisely set quota for a particular combination of graphQL name and operation type for a particular proxy request. If graphQL name is not set, this would imply quota will be applied on all graphQL requests matching the operation type.
/// </summary>
public record GoogleCloudApigeeV1GraphQlOperationGroup2
{
    /// <summary>
    /// Flag that specifies whether the configuration is for Apigee API proxy or a remote service. Valid values include <c>proxy</c> or <c>remoteservice</c>. Defaults to <c>proxy</c>. Set to <c>proxy</c> when Apigee API proxies are associated with the API product. Set to <c>remoteservice</c> when non-Apigee proxies like Istio-Envoy are associated with the API product.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operationConfigType")]
    public string? OperationConfigType { get; init; }

    /// <summary>
    /// Required. List of operation configurations for either Apigee API proxies or other remote services that are associated with this API product.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operationConfigs")]
    public IReadOnlyList<GoogleCloudApigeeV1GraphQlOperationConfig>? OperationConfigs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
