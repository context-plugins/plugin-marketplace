using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Models;

namespace GoogleCloudTalentSolution.Models;

/// <summary>
/// Job entry with metadata inside SearchJobsResponse.
/// </summary>
public record MatchingJob
{
    /// <summary>
    /// Contains snippets of text from the Job.title field most closely matching a search query's keywords, if available. The matching query keywords are enclosed in HTML bold tags.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobTitleSnippet")]
    public string? JobTitleSnippet { get; init; }

    /// <summary>
    /// Commute information which is generated based on specified CommuteFilter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commuteInfo")]
    public CommuteInfo1? CommuteInfo { get; init; }

    /// <summary>
    /// A summary of the job with core information that's displayed on the search results listing page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobSummary")]
    public string? JobSummary { get; init; }

    /// <summary>
    /// Job resource that matches the specified SearchJobsRequest.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("job")]
    public Job1? Job { get; init; }

    /// <summary>
    /// Contains snippets of text from the Job.description and similar fields that most closely match a search query's keywords, if available. All HTML tags in the original fields are stripped when returned in this field, and matching query keywords are enclosed in HTML bold tags.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("searchTextSnippet")]
    public string? SearchTextSnippet { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
