using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record AccountsOverviewRequest
{
    /// <summary>
    /// The start of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred after this day.
    /// </summary>
    [JsonPropertyName("FromTime")]
    public required DateTimeOffset FromTime { get; init; }

    /// <summary>
    /// The end of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred before this day. If this is not specified, then the current day is used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ToTime")]
    public DateTimeOffset? ToTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
