using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record PlanLimitsResponse
{
    /// <summary>
    /// Monthly data-API call limit (podcasts, episodes, persons, entities,
    /// charts, trending). <c>null</c> means unlimited; <c>0</c> means disabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data_calls_per_month")]
    public long? DataCallsPerMonth { get; init; }

    /// <summary>
    /// Maximum number of keyword alerts a user can create. <c>null</c> = unlimited.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keyword_alerts")]
    public long? KeywordAlerts { get; init; }

    [JsonPropertyName("max_api_keys")]
    public required long MaxApiKeys { get; init; }

    /// <summary>
    /// Monthly text-search limit. <c>null</c> means unlimited.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("searches_per_month")]
    public long? SearchesPerMonth { get; init; }

    /// <summary>
    /// Monthly semantic / hybrid search limit. <c>null</c> means unlimited;
    /// <c>0</c> means the feature is disabled on this plan.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("semantic_searches_per_month")]
    public long? SemanticSearchesPerMonth { get; init; }

    /// <summary>
    /// Storage limit for private uploads, in megabytes. <c>null</c> = unlimited.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("storage_mb")]
    public long? StorageMb { get; init; }

    /// <summary>
    /// Monthly transcription quota for private uploads (in audio minutes).
    /// <c>null</c> = unlimited; <c>0</c> = uploads disabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transcription_minutes_per_month")]
    public long? TranscriptionMinutesPerMonth { get; init; }

    /// <summary>
    /// Whether webhook delivery is enabled for keyword alerts on this plan.
    /// </summary>
    [JsonPropertyName("webhooks_enabled")]
    public required bool WebhooksEnabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
