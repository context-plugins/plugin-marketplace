using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;
using GoogleAnalytics.Models.Enums;

namespace GoogleAnalytics.Models;

/// <summary>
/// Request message for SearchChangeHistoryEvents RPC.
/// </summary>
public record GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest
{
    /// <summary>
    /// Optional. If set, only return changes if they are made by a user in this list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actorEmail")]
    public IReadOnlyList<string>? ActorEmail { get; init; }

    /// <summary>
    /// Optional. The maximum number of ChangeHistoryEvent items to return. If unspecified, at most 50 items will be returned. The maximum value is 200 (higher values will be coerced to the maximum). Note that the service may return a page with fewer items than this value specifies (potentially even zero), and that there still may be additional pages. If you want a particular number of items, you'll need to continue requesting additional pages using <c>page_token</c> until you get the needed number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageSize")]
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. If set, only return changes if they are for a resource that matches at least one of these types.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceType")]
    public IReadOnlyList<ResourceType>? ResourceType { get; init; }

    /// <summary>
    /// Optional. If set, only return changes made before this time (inclusive).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("latestChangeTime")]
    public string? LatestChangeTime { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>SearchChangeHistoryEvents</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to <c>SearchChangeHistoryEvents</c> must match the call that provided the page token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageToken")]
    public string? PageToken { get; init; }

    /// <summary>
    /// Optional. Resource name for a child property. If set, only return changes made to this property or its child resources. Format: properties/{propertyId} Example: <c>properties/100</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("property")]
    public string? Property { get; init; }

    /// <summary>
    /// Optional. If set, only return changes made after this time (inclusive).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("earliestChangeTime")]
    public string? EarliestChangeTime { get; init; }

    /// <summary>
    /// Optional. If set, only return changes that match one or more of these types of actions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("action")]
    public IReadOnlyList<Action1>? Action { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
