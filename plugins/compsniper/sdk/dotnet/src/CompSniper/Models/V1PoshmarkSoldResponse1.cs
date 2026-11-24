using System.Text.Json.Serialization;
using CompSniper.Core.Models;

namespace CompSniper.Models;

public record V1PoshmarkSoldResponse1
{
    [JsonPropertyName("code")]
    public string Code { get; } = "rate_limited";

    [JsonPropertyName("error")]
    public required string Error { get; init; }

    [JsonPropertyName("plan")]
    public required string Plan { get; init; }

    [JsonPropertyName("limit")]
    public required double Limit { get; init; }

    [JsonPropertyName("remaining")]
    public int Remaining { get; } = 0;

    [JsonPropertyName("retry_after")]
    public required double RetryAfter { get; init; }

    [JsonPropertyName("reset")]
    public required double Reset { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
