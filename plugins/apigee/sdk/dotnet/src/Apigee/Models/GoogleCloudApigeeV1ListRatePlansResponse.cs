using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for ListRatePlans.
/// </summary>
public record GoogleCloudApigeeV1ListRatePlansResponse
{
    /// <summary>
    /// Value that can be sent as <c>startKey</c> to retrieve the next page of content. If this field is omitted, there are no subsequent pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextStartKey")]
    public string? NextStartKey { get; init; }

    /// <summary>
    /// List of rate plans in an organization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ratePlans")]
    public IReadOnlyList<GoogleCloudApigeeV1RatePlan>? RatePlans { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
