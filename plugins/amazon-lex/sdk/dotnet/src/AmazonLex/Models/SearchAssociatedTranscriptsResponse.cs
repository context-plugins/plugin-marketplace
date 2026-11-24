using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record SearchAssociatedTranscriptsResponse
{
    /// <summary>
    /// The unique identifier of the bot associated with the transcripts that you are searching.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botId")]
    public string? BotId { get; init; }

    /// <summary>
    /// The version of the bot containing the transcripts that you are searching.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botVersion")]
    public string? BotVersion { get; init; }

    /// <summary>
    /// The identifier of the language and locale of the transcripts to search. The string must match one of the supported locales. For more information, see Supported languages
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localeId")]
    public string? LocaleId { get; init; }

    /// <summary>
    /// The unique identifier of the bot recommendation associated with the transcripts to search.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botRecommendationId")]
    public string? BotRecommendationId { get; init; }

    /// <summary>
    /// A index that indicates whether there are more results to return in a response to the SearchAssociatedTranscripts operation. If the nextIndex field is present, you send the contents as the nextIndex parameter of a SearchAssociatedTranscriptsRequest operation to get the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextIndex")]
    public int? NextIndex { get; init; }

    /// <summary>
    /// The object that contains the associated transcript that meet the criteria you specified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("associatedTranscripts")]
    public IReadOnlyList<AssociatedTranscript>? AssociatedTranscripts { get; init; }

    /// <summary>
    /// The total number of transcripts returned by the search.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalResults")]
    public int? TotalResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
