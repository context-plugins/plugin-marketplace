using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for ListDeveloperSubscriptions.
/// </summary>
public record GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse
{
    /// <summary>
    /// List of all subscriptions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("developerSubscriptions")]
    public IReadOnlyList<GoogleCloudApigeeV1DeveloperSubscription>? DeveloperSubscriptions { get; init; }

    /// <summary>
    /// Value that can be sent as <c>startKey</c> to retrieve the next page of content. If this field is omitted, there are no subsequent pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextStartKey")]
    public string? NextStartKey { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
