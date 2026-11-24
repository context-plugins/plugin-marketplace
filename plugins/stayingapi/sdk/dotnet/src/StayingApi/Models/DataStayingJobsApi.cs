using System.Text.Json.Serialization;
using StayingApi.Core.Models;
using StayingApi.Models.Enums;

namespace StayingApi.Models;

public record DataStayingJobsApi
{
    [JsonPropertyName("jobId")]
    public required string JobId { get; init; }

    [JsonPropertyName("status")]
    public required Status1StayingJobsApi Status { get; init; }

    [JsonPropertyName("pollUrl")]
    public required string PollUrl { get; init; }

    [JsonPropertyName("estimatedSeconds")]
    public required int EstimatedSeconds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
