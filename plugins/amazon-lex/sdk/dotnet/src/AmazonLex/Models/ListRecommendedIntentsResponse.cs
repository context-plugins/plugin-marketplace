using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ListRecommendedIntentsResponse
{
    /// <summary>
    /// The unique identifier of the bot associated with the recommended intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botId")]
    public string? BotId { get; init; }

    /// <summary>
    /// The version of the bot that contains the intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botVersion")]
    public string? BotVersion { get; init; }

    /// <summary>
    /// The identifier of the language and locale of the intents to list. The string must match one of the supported locales. For more information, see Supported languages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localeId")]
    public string? LocaleId { get; init; }

    /// <summary>
    /// The identifier of the bot recommendation that contains the recommended intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botRecommendationId")]
    public string? BotRecommendationId { get; init; }

    /// <summary>
    /// Summary information for the intents that meet the filter criteria specified in the request. The length of the list is specified in the maxResults parameter of the request. If there are more intents available, the nextToken field contains a token to get the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summaryList")]
    public IReadOnlyList<RecommendedIntentSummary>? SummaryList { get; init; }

    /// <summary>
    /// A token that indicates whether there are more results to return in a response to the ListRecommendedIntents operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListRecommendedIntents operation request to get the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
