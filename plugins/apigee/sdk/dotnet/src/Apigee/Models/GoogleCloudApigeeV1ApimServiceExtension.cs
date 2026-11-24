using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// APIM Service Extension is a resource under an Apigee Organization that is used to create APIM Service Extension to route traffic to existing X instances.
/// </summary>
public record GoogleCloudApigeeV1ApimServiceExtension
{
    /// <summary>
    /// Identifier. unique name of the APIM service extension. The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens, and can have a maximum length of 63 characters. Additionally, the first character must be a letter and the last a letter or a number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Required. List of network configurations for the APIM service extension.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("networkConfigs")]
    public IReadOnlyList<GoogleCloudApigeeV1ApimServiceExtensionNetworkConfig>? NetworkConfigs { get; init; }

    /// <summary>
    /// Optional. List of extensions that are part of the service extension. Refer to https://cloud.google.com/service-extensions/docs/quotas#limits for any limits.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extensions")]
    public IReadOnlyList<GoogleCloudApigeeV1ApimServiceExtensionExtension>? Extensions { get; init; }

    /// <summary>
    /// Required. The network where the forwarding rule is created. Format: projects/{project}/global/networks/{network}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("network")]
    public string? Network { get; init; }

    /// <summary>
    /// Output only. State of the APIM service extension. Values other than <c>ACTIVE</c> mean the resource is not ready to use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State12? State { get; init; }

    /// <summary>
    /// Output only. The time that this resource was updated on the server.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Required. Name of the proxy deployed in the Apigee X instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extensionProcessor")]
    public string? ExtensionProcessor { get; init; }

    /// <summary>
    /// Required. Name of the Google Cloud LB forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule} projects/{project}/global/forwardingRules/{forwarding_rule}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lbForwardingRule")]
    public string? LbForwardingRule { get; init; }

    /// <summary>
    /// Output only. The time that this resource was created on the server.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
