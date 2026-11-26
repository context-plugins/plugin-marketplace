using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphAi.Core.Models;
using AlphAi.Models.AnyOf;

namespace AlphAi.Models;

public record RadarReading
{
    [JsonPropertyName("ticker")]
    public required string Ticker { get; init; }

    [JsonPropertyName("sector")]
    public required Sector Sector { get; init; }

    [JsonPropertyName("market")]
    public required Market1 Market { get; init; }

    [JsonPropertyName("market_exposure_baseline")]
    public required int MarketExposureBaseline { get; init; }

    [JsonPropertyName("market_exposure_current")]
    public required int MarketExposureCurrent { get; init; }

    [JsonPropertyName("collection")]
    public required RadarCollection Collection { get; init; }

    [JsonPropertyName("stories")]
    public required int Stories { get; init; }

    [JsonPropertyName("articles")]
    public required int Articles { get; init; }

    [JsonPropertyName("outlets")]
    public required int Outlets { get; init; }

    [JsonPropertyName("model_stories")]
    public required int ModelStories { get; init; }

    [JsonPropertyName("model_outlets")]
    public required int ModelOutlets { get; init; }

    [JsonPropertyName("baseline_stories")]
    public required int BaselineStories { get; init; }

    [JsonPropertyName("baseline_active_days")]
    public required int BaselineActiveDays { get; init; }

    [JsonPropertyName("stories_per_window_unadjusted")]
    public required double StoriesPerWindowUnadjusted { get; init; }

    [JsonPropertyName("stories_expected")]
    public required StoriesExpected StoriesExpected { get; init; }

    [JsonPropertyName("tail_probability")]
    public required TailProbability TailProbability { get; init; }

    [JsonPropertyName("news_z")]
    public required NewsZ NewsZ { get; init; }

    [JsonPropertyName("anomaly_reason")]
    public required AnomalyReason AnomalyReason { get; init; }

    [JsonPropertyName("candidate_news_spike")]
    public required bool CandidateNewsSpike { get; init; }

    [JsonPropertyName("sent")]
    public required RadarSentiment Sent { get; init; }

    [JsonPropertyName("sent_prev")]
    public required RadarSentiment SentPrev { get; init; }

    [JsonPropertyName("sent_delta")]
    public required SentDelta SentDelta { get; init; }

    [JsonPropertyName("evidence_uids")]
    public required IReadOnlyList<string> EvidenceUids { get; init; }

    [JsonPropertyName("name")]
    public required Name Name { get; init; }

    [JsonPropertyName("evidence")]
    public required IReadOnlyList<RadarEvidence> Evidence { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event_context")]
    public EventContext? EventContext { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
