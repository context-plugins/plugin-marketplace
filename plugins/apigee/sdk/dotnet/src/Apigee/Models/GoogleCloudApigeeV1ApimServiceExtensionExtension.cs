using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Extension configuration for Apigee extension processor service extension.
/// </summary>
public record GoogleCloudApigeeV1ApimServiceExtensionExtension
{
    /// <summary>
    /// Optional. Whether this request should fail open.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failOpen")]
    public bool? FailOpen { get; init; }

    /// <summary>
    /// Optional. Match Condition for CEL expression. Refer to https://cloud.google.com/service-extensions/docs/cel-matcher-language-reference for more details.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("matchCondition")]
    public string? MatchCondition { get; init; }

    /// <summary>
    /// Required. One of the hostnames of Apigee EnvGroup where the proxy is deployed. This hostname (i.e FDQN) will be used to route traffic from the specified forwarding rule to the environment in Apigee X instance where the proxy is deployed for handling extension traffic. Format: ^([a-zA-Z0-9. _-])+$
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hostname")]
    public string? Hostname { get; init; }

    /// <summary>
    /// Optional. Supported events for the Service Extension. If not specified, all events are supported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("supportedEvents")]
    public IReadOnlyList<SupportedEvent>? SupportedEvents { get; init; }

    /// <summary>
    /// Required. Name of the <c>LbTrafficExtension</c> resource. The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens, and can have a maximum length of 63 characters. Additionally, the first character must be a letter and the last a letter or a number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
