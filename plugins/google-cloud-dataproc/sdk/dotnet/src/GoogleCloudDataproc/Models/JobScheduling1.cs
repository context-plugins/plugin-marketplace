using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. Job scheduling configuration.
/// </summary>
public record JobScheduling1
{
    /// <summary>
    /// Optional. Maximum total number of times a driver can be restarted as a result of the driver exiting with a non-zero code. After the maximum number is reached, the job will be reported as failed.Maximum value is 240.Note: Currently, this restartable job option is not supported in Dataproc workflow templates (https://cloud.google.com/dataproc/docs/concepts/workflows/using-workflows#adding_jobs_to_a_template).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxFailuresTotal")]
    public int? MaxFailuresTotal { get; init; }

    /// <summary>
    /// Optional. Maximum number of times per hour a driver can be restarted as a result of driver exiting with non-zero code before job is reported failed.A job might be reported as thrashing if the driver exits with a non-zero code four times within a 10-minute window.Maximum value is 10.Note: This restartable job option is not supported in Dataproc workflow templates (https://cloud.google.com/dataproc/docs/concepts/workflows/using-workflows#adding_jobs_to_a_template).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxFailuresPerHour")]
    public int? MaxFailuresPerHour { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
