using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. The fully qualified reference to the job, which can be used to obtain the equivalent REST path of the job resource. If this property is not specified when a job is created, the server generates a job_id.
/// </summary>
public record JobReference2
{
    /// <summary>
    /// Optional. The job ID, which must be unique within the project.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or hyphens (-). The maximum length is 100 characters.If not specified by the caller, the job ID will be provided by the server.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobId")]
    public string? JobId { get; init; }

    /// <summary>
    /// Optional. The ID of the Google Cloud Platform project that the job belongs to. If specified, must match the request project ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("projectId")]
    public string? ProjectId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
