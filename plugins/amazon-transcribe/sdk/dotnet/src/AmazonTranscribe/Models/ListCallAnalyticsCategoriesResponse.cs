using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record ListCallAnalyticsCategoriesResponse
{
    /// <summary>
    /// If NextToken is present in your response, it indicates that not all results are displayed. To view the next set of results, copy the string associated with the NextToken parameter in your results output, then run your request again including NextToken with the value of the copied string. Repeat as needed to view all your results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// Provides detailed information about your Call Analytics categories, including all the rules associated with each category.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Categories")]
    public IReadOnlyList<CategoryProperties>? Categories { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
