using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record ListMedicalScribeJobsRequest
{
    /// <summary>
    /// Returns only Medical Scribe jobs with the specified status. Jobs are ordered by creation date, with the newest job first. If you do not include Status, all Medical Scribe jobs are returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public StatusAmazonTranscribeServiceMedicalScribeJobApi? Status { get; init; }

    /// <summary>
    /// Returns only the Medical Scribe jobs that contain the specified string. The search is not case sensitive.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobNameContains")]
    public string? JobNameContains { get; init; }

    /// <summary>
    /// If your ListMedicalScribeJobs request returns more results than can be displayed, NextToken is displayed in the response with an associated string. To get the next page of results, copy this string and repeat your request, including NextToken with the value of the copied string. Repeat as needed to view all your results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// The maximum number of Medical Scribe jobs to return in each page of results. If there are fewer results than the value that you specify, only the actual results are returned. If you do not specify a value, a default of 5 is used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxResults")]
    public int? MaxResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
