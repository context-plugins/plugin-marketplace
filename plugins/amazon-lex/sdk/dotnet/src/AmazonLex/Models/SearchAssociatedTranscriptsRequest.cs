using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record SearchAssociatedTranscriptsRequest
{
    /// <summary>
    /// The unique identifier of the bot associated with the transcripts that you are searching.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The version of the bot containing the transcripts that you are searching.
    /// </summary>
    [JsonPropertyName("botVersion")]
    public required string BotVersion { get; init; }

    /// <summary>
    /// The identifier of the language and locale of the transcripts to search. The string must match one of the supported locales. For more information, see Supported languages
    /// </summary>
    [JsonPropertyName("localeId")]
    public required string LocaleId { get; init; }

    /// <summary>
    /// The unique identifier of the bot recommendation associated with the transcripts to search.
    /// </summary>
    [JsonPropertyName("botRecommendationId")]
    public required string BotRecommendationId { get; init; }

    /// <summary>
    /// How SearchResults are ordered. Valid values are Ascending or Descending. The default is Descending.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("searchOrder")]
    public SearchOrder? SearchOrder { get; init; }

    /// <summary>
    /// A list of filter objects.
    /// </summary>
    [JsonPropertyName("filters")]
    public required IReadOnlyList<AssociatedTranscriptFilter> Filters { get; init; }

    /// <summary>
    /// The maximum number of bot recommendations to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxResults")]
    public int? MaxResults { get; init; }

    /// <summary>
    /// If the response from the SearchAssociatedTranscriptsRequest operation contains more results than specified in the maxResults parameter, an index is returned in the response. Use that index in the nextIndex parameter to return the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextIndex")]
    public int? NextIndex { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
