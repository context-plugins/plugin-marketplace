using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record EventTimeRange
{
    /// <summary>
    /// The time when the event started.
    /// </summary>
    [JsonPropertyName("FromTime")]
    public required DateTimeOffset FromTime { get; init; }

    /// <summary>
    /// The time when the event ended.
    /// </summary>
    [JsonPropertyName("ToTime")]
    public required DateTimeOffset ToTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
