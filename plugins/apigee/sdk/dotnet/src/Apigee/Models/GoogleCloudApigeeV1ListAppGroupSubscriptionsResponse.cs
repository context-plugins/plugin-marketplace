using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for ListAppGroupSubscriptions.
/// </summary>
public record GoogleCloudApigeeV1ListAppGroupSubscriptionsResponse
{
    /// <summary>
    /// Value that can be sent as <c>pageToken</c> to retrieve the next page of content. If this field is omitted, there are no subsequent pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// The list of subscriptions for an AppGroup.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appGroupSubscriptions")]
    public IReadOnlyList<GoogleCloudApigeeV1AppGroupSubscription>? AppGroupSubscriptions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
