using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Configuration used to group Apigee proxies or remote services with resources, method types, and quotas. The resource refers to the resource URI (excluding the base path). With this grouping, the API product creator is able to fine-tune and give precise control over which REST methods have access to specific resources and how many calls can be made (using the <c>quota</c> setting). <b>Note:</b> The <c>api_resources</c> setting cannot be specified for both the API product and operation group; otherwise the call will fail.
/// </summary>
public record GoogleCloudApigeeV1OperationGroup1
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
