using System.Collections.Generic;
using System.Text.Json.Serialization;
using WhoisFreaks.Core.Models;

namespace WhoisFreaks.Models;

public record ReputationIntelligence
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ioc_type")]
    public string? IocType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ioc_value")]
    public string? IocValue { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("related_iocs")]
    public IReadOnlyList<RelatedIoc>? RelatedIocs { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("feed_tags")]
    public IReadOnlyList<string>? FeedTags { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stix_pattern")]
    public string? StixPattern { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recommended_action")]
    public string? RecommendedAction { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("first_seen")]
    public string? FirstSeen { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_seen")]
    public string? LastSeen { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
