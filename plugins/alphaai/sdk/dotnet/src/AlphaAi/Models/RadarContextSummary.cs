using System.Text.Json.Serialization;
using AlphaAi.Core.Models;
using AlphaAi.Models.AnyOf;
using AlphaAi.Models.Enums;

namespace AlphaAi.Models;

/// <summary>
/// Context availability and timing for the selected snapshot, without ticker data.
/// </summary>
public record RadarContextSummary
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status1? Status { get; init; } = Status1.Unavailable;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public Reason11? Reason { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("as_of")]
    public AsOf? AsOf { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("generated_at")]
    public GeneratedAt? GeneratedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("age_seconds")]
    public AgeSeconds? AgeSeconds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max_age_seconds")]
    public MaxAgeSeconds? MaxAgeSeconds { get; init; } = MaxAgeSeconds.Value300;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filings_lookback_days")]
    public FilingsLookbackDays? FilingsLookbackDays { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cluster_lookback_days")]
    public ClusterLookbackDays? ClusterLookbackDays { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identity_scope")]
    public IdentityScope? IdentityScope { get; init; } = IdentityScope.IssuerCik;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("point_in_time")]
    public bool? PointInTime { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
