using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Optional. Configuration used to group Apigee proxies with gRPC services and method names. This grouping allows us to set quota for a particular proxy with the gRPC service name and method. If a method name is not set, this implies quota and authorization are applied to all gRPC methods implemented by that proxy for that particular gRPC service.
/// </summary>
public record GoogleCloudApigeeV1GrpcOperationGroup2
{
    /// <summary>
    /// Required. List of operation configurations for either Apigee API proxies that are associated with this API product.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operationConfigs")]
    public IReadOnlyList<GoogleCloudApigeeV1GrpcOperationConfig>? OperationConfigs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
