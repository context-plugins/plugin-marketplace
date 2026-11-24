using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// If this report results is <see href="https://support.google.com/analytics/answer/13331292">sampled</see>, this describes the percentage of events used in this report. Sampling is the practice of analyzing a subset of all data in order to uncover the meaningful information in the larger data set.
/// </summary>
public record SamplingMetadata
{
    /// <summary>
    /// The total number of events present in this property's data that could have been analyzed in this report for a date range. Sampling uncovers the meaningful information about the larger data set, and this is the size of the larger data set. To calculate the percentage of available data that was used in this report, compute <c>samplesReadCount/samplingSpaceSize</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("samplingSpaceSize")]
    public string? SamplingSpaceSize { get; init; }

    /// <summary>
    /// The total number of events read in this sampled report for a date range. This is the size of the subset this property's data that was analyzed in this report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("samplesReadCount")]
    public string? SamplesReadCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
