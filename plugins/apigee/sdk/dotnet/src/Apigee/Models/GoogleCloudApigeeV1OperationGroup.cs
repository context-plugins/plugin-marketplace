using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// List of operation configuration details associated with Apigee API proxies or remote services. Remote services are non-Apigee proxies, such as Istio-Envoy.
/// </summary>
public record GoogleCloudApigeeV1OperationGroup
{
    /// <summary>
    /// Required. List of operation configurations for either Apigee API proxies or other remote services that are associated with this API product.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operationConfigs")]
    public IReadOnlyList<GoogleCloudApigeeV1OperationConfig>? OperationConfigs { get; init; }

    /// <summary>
    /// Flag that specifes whether the configuration is for Apigee API proxy or a remote service. Valid values include <c>proxy</c> or <c>remoteservice</c>. Defaults to <c>proxy</c>. Set to <c>proxy</c> when Apigee API proxies are associated with the API product. Set to <c>remoteservice</c> when non-Apigee proxies like Istio-Envoy are associated with the API product.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operationConfigType")]
    public string? OperationConfigType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
