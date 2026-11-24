using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record ListVocabulariesRequest
{
    /// <summary>
    /// If your ListVocabularies request returns more results than can be displayed, NextToken is displayed in the response with an associated string. To get the next page of results, copy this string and repeat your request, including NextToken with the value of the copied string. Repeat as needed to view all your results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// The maximum number of custom vocabularies to return in each page of results. If there are fewer results than the value that you specify, only the actual results are returned. If you do not specify a value, a default of 5 is used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxResults")]
    public int? MaxResults { get; init; }

    /// <summary>
    /// Returns only custom vocabularies with the specified state. Vocabularies are ordered by creation date, with the newest vocabulary first. If you do not include StateEquals, all custom medical vocabularies are returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StateEquals")]
    public StateEqualsAmazonTranscribeServiceVocabulariesApi? StateEquals { get; init; }

    /// <summary>
    /// Returns only the custom vocabularies that contain the specified string. The search is not case sensitive.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NameContains")]
    public string? NameContains { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
