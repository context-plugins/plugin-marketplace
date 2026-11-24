using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Summary of a Spark Application jobs.
/// </summary>
public record SummarizeSessionSparkApplicationJobsResponse
{
    /// <summary>
    /// Summary of a Spark Application Jobs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobsSummary")]
    public JobsSummary2? JobsSummary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
