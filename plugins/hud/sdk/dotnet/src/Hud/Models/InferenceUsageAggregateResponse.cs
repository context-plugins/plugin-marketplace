using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models;

public record InferenceUsageAggregateResponse
{
    [JsonPropertyName("start")]
    public required DateTimeOffset Start { get; init; }

    [JsonPropertyName("end")]
    public required DateTimeOffset End { get; init; }

    [JsonPropertyName("bucket_width")]
    public required BucketWidth BucketWidth { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group_by")]
    public IReadOnlyList<GroupBy>? GroupBy { get; init; }

    [JsonPropertyName("total_requests")]
    public required int TotalRequests { get; init; }

    [JsonPropertyName("total_cost")]
    public required double TotalCost { get; init; }

    [JsonPropertyName("buckets")]
    public required IReadOnlyList<InferenceUsageBucket> Buckets { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
