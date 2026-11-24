using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Models;

namespace GoogleCloudTalentSolution.Models;

/// <summary>
/// Response for SearchJob method.
/// </summary>
public record SearchJobsResponse
{
    /// <summary>
    /// Number of jobs that match the specified query. Note: This size is precise only if the total is less than 100,000.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalSize")]
    public int? TotalSize { get; init; }

    /// <summary>
    /// The Job entities that match the specified SearchJobsRequest.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("matchingJobs")]
    public IReadOnlyList<MatchingJob>? MatchingJobs { get; init; }

    /// <summary>
    /// Additional information for the API invocation, such as the request tracking id.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public ResponseMetadata1? Metadata { get; init; }

    /// <summary>
    /// The histogram results that match with specified SearchJobsRequest.histogram_queries.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("histogramQueryResults")]
    public IReadOnlyList<HistogramQueryResult>? HistogramQueryResults { get; init; }

    /// <summary>
    /// If query broadening is enabled, we may append additional results from the broadened query. This number indicates how many of the jobs returned in the jobs field are from the broadened query. These results are always at the end of the jobs list. In particular, a value of 0, or if the field isn't set, all the jobs in the jobs list are from the original (without broadening) query. If this field is non-zero, subsequent requests with offset after this result set should contain all broadened results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("broadenedQueryJobsCount")]
    public int? BroadenedQueryJobsCount { get; init; }

    /// <summary>
    /// The token that specifies the starting position of the next page of results. This field is empty if there are no more results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// The location filters that the service applied to the specified query. If any filters are lat-lng based, the Location.location_type is Location.LocationType.LOCATION_TYPE_UNSPECIFIED.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locationFilters")]
    public IReadOnlyList<Location>? LocationFilters { get; init; }

    /// <summary>
    /// The spell checking result, and correction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spellCorrection")]
    public SpellingCorrection2? SpellCorrection { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
