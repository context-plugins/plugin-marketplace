using System.Text.Json.Serialization;
using CompSniper.Core.Models;

namespace CompSniper.Models;

public record V1PoshmarkSoldResponse11
{
    [JsonPropertyName("code")]
    public string Code { get; } = "quota_exceeded";

    [JsonPropertyName("error")]
    public required string Error { get; init; }

    [JsonPropertyName("plan")]
    public required string Plan { get; init; }

    [JsonPropertyName("limit")]
    public required double Limit { get; init; }

    [JsonPropertyName("used")]
    public required double Used { get; init; }

    [JsonPropertyName("remaining")]
    public int Remaining { get; } = 0;

    [JsonPropertyName("reset_at")]
    public required string ResetAt { get; init; }

    [JsonPropertyName("retry_after")]
    public required double RetryAfter { get; init; }

    [JsonPropertyName("upgrade_url")]
    public required string UpgradeUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
