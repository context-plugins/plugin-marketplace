using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record LinkedinActivityIntentItem
{
    /// <summary>
    /// Lusha company ID this activity belongs to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyId")]
    public double? CompanyId { get; init; }

    /// <summary>
    /// Date the post was published.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activityPublicationDate")]
    public DateTimeOffset? ActivityPublicationDate { get; init; }

    /// <summary>
    /// Post classification.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signalCategory")]
    public string? SignalCategory { get; init; }

    /// <summary>
    /// Detected Bombora topics and their category.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentTopics")]
    public IReadOnlyList<LinkedinActivityIntentTopic>? IntentTopics { get; init; }

    /// <summary>
    /// A person referenced in a LinkedIn activity intent post (author or mention).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("author")]
    public LinkedinActivityIntentPerson? Author { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contactsMentioned")]
    public IReadOnlyList<LinkedinActivityIntentPerson>? ContactsMentioned { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companiesMentioned")]
    public IReadOnlyList<LinkedinActivityIntentCompanyMention>? CompaniesMentioned { get; init; }

    /// <summary>
    /// URL of the source post.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activityUrl")]
    public string? ActivityUrl { get; init; }

    /// <summary>
    /// AI-generated summary. Never contains the raw post text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activitySummary")]
    public string? ActivitySummary { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activityLikes")]
    public int? ActivityLikes { get; init; } = 0;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activityComments")]
    public int? ActivityComments { get; init; } = 0;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activityShares")]
    public int? ActivityShares { get; init; } = 0;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activityType")]
    public string? ActivityType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
