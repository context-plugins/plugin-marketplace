using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// LLM Token Quota contains the essential parameters needed that can be applied on the resources, methods, models, API source combination associated with this API product. While LLM Token Quota is optional, setting it prevents requests from exceeding the provisioned parameters.
/// </summary>
public record GoogleCloudApigeeV1LlmTokenQuota
{
    /// <summary>
    /// Required. Upper limit of LLM tokens allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public string? Limit { get; init; }

    /// <summary>
    /// Required. Time interval over which the number of request messages is calculated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("interval")]
    public string? Interval { get; init; }

    /// <summary>
    /// Optional. Time unit defined for the <c>interval</c>. Valid values include <c>minute</c>, <c>hour</c>, <c>day</c>, or <c>month</c>. If <c>limit</c> and <c>interval</c> are valid, the default value is <c>hour</c>; otherwise, the default is null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeUnit")]
    public string? TimeUnit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
