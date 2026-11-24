using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record GetInsightEventsResult
{
    /// <summary>
    /// A detailed description of the event. This includes the time of the event, client and root cause impact statistics, and the top anomalous service at the time of the event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InsightEvents")]
    public IReadOnlyList<InsightEvent>? InsightEvents { get; init; }

    /// <summary>
    /// Use this token to retrieve the next page of insight events.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
