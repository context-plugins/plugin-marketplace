using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// A SecurityAction is rule that can be enforced at an environment level. The result is one of: - A denied API call - An explicitly allowed API call - A flagged API call (HTTP headers added before the target receives it) At least one condition is required to create a SecurityAction.
/// </summary>
public record GoogleCloudApigeeV1SecurityAction
{
    /// <summary>
    /// Input only. The TTL for this SecurityAction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ttl")]
    public string? Ttl { get; init; }

    /// <summary>
    /// Deny a request through if it matches this SecurityAction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deny")]
    public GoogleCloudApigeeV1SecurityActionDeny2? Deny { get; init; }

    /// <summary>
    /// Optional. An optional user provided description of the SecurityAction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Immutable. This field is ignored during creation as per AIP-133. Please set the <c>security_action_id</c> field in the CreateSecurityActionRequest when creating a new SecurityAction. Format: organizations/{org}/environments/{env}/securityActions/{security_action}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Required. A valid SecurityAction must contain at least one condition.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conditionConfig")]
    public GoogleCloudApigeeV1SecurityActionConditionConfig2? ConditionConfig { get; init; }

    /// <summary>
    /// Optional. If unset, this would apply to all proxies in the environment. If set, this action is enforced only if at least one proxy in the repeated list is deployed at the time of enforcement. If set, several restrictions are enforced on SecurityActions. There can be at most 100 enabled actions with proxies set in an env. Several other restrictions apply on conditions and are detailed later.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiProxies")]
    public IReadOnlyList<string>? ApiProxies { get; init; }

    /// <summary>
    /// Flag a request through if it matches this SecurityAction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("flag")]
    public GoogleCloudApigeeV1SecurityActionFlag2? Flag { get; init; }

    /// <summary>
    /// Allow a request through if it matches this SecurityAction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allow")]
    public object? Allow { get; init; }

    /// <summary>
    /// Output only. The create time for this SecurityAction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Required. Only an ENABLED SecurityAction is enforced. An ENABLED SecurityAction past its expiration time will not be enforced.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State6? State { get; init; }

    /// <summary>
    /// The expiration for this SecurityAction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expireTime")]
    public string? ExpireTime { get; init; }

    /// <summary>
    /// Output only. The update time for this SecurityAction. This reflects when this SecurityAction changed states.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
