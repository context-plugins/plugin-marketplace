using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// A single resource-level result for creating or updating an insight. Server-computed fields (severity, resolved, enhancement) are not accepted here and will be ignored. Identity fields (resourceId, resultType, account, cloudProvider) form the composite key. The fields location and resource_type are set on creation only — any values provided for these fields during subsequent upserts are silently ignored.
/// </summary>
public record ResourceResultRequest
{
    /// <summary>
    /// The cloud resource identifier.
    /// </summary>
    [JsonPropertyName("resourceId")]
    public required string ResourceId { get; init; }

    /// <summary>
    /// What the resource actually is, e.g. for an EC2 resource ID, this field would be <c>instance</c>. Immutable after creation — updates to this field are silently ignored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceType")]
    public string? ResourceType { get; init; }

    /// <summary>
    /// Immutable after creation — updates to this field are silently ignored.
    /// </summary>
    [JsonPropertyName("cloudProvider")]
    public required string CloudProvider { get; init; }

    /// <summary>
    /// The cloud account or project ID containing this resource. Immutable after creation — updates to this field are silently ignored.
    /// </summary>
    [JsonPropertyName("account")]
    public required string Account { get; init; }

    /// <summary>
    /// Represents the region/zone of the resource in AWS, or equivalent for other providers. Immutable after creation — updates to this field are silently ignored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public string? Location { get; init; }

    /// <summary>
    /// the external ID of the resource in the provider's system for the resource
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalId")]
    public string? ExternalId { get; init; }

    /// <summary>
    /// the URL to the resource-level issue in the provider's system
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalUrl")]
    public string? ExternalUrl { get; init; }

    /// <summary>
    /// contains any additional information for the resource results
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public object? Metadata { get; init; }

    /// <summary>
    /// The discriminator property that determines which fields are populated in the 'result' object.
    /// </summary>
    [JsonPropertyName("resultType")]
    public required ResultType ResultType { get; init; }

    /// <summary>
    /// The result data for this resource. Which fields are populated depends on the resultType. For security_risk: critical, high, medium, low. For potential_daily_savings: value. For potential_daily_savings_with_recommendation: value, current, recommendation. For potential_daily_savings_with_cluster_agent: value, agentInstalled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("result")]
    public Result? Result { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
