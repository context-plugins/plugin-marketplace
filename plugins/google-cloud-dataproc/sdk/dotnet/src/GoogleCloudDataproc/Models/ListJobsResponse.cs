using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// A list of jobs in a project.
/// </summary>
public record ListJobsResponse
{
    /// <summary>
    /// Optional. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListJobsRequest.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// Output only. List of jobs with kms_key-encrypted parameters that could not be decrypted. A response to a jobs.get request may indicate the reason for the decryption failure for a specific job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unreachable")]
    public IReadOnlyList<string>? Unreachable { get; init; }

    /// <summary>
    /// Output only. Jobs list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobs")]
    public IReadOnlyList<Job>? Jobs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
