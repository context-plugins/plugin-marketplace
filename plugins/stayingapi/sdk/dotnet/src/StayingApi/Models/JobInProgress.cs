using System.Text.Json.Serialization;
using StayingApi.Core.Models;

namespace StayingApi.Models;

/// <summary>
/// pending | running — carries a Retry-After header; poll again after the back-off.
/// </summary>
public record JobInProgress
{
    [JsonPropertyName("data")]
    public required DataStayingJobsApi Data { get; init; }

    [JsonPropertyName("meta")]
    public required Meta2 Meta { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
