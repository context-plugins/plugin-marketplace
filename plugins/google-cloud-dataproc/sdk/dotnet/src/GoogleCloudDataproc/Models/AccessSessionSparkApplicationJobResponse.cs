using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Details of a particular job associated with Spark Application
/// </summary>
public record AccessSessionSparkApplicationJobResponse
{
    /// <summary>
    /// Output only. Data corresponding to a spark job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobData")]
    public JobData1? JobData { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
