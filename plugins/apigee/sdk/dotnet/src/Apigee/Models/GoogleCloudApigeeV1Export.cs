using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Details of an export job.
/// </summary>
public record GoogleCloudApigeeV1Export
{
    /// <summary>
    /// Output only. Time the export job was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created")]
    public string? Created { get; init; }

    /// <summary>
    /// Output only. Error is set when export fails
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public string? Error { get; init; }

    /// <summary>
    /// Output only. Time the export job was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated")]
    public string? Updated { get; init; }

    /// <summary>
    /// Display name of the export job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Output only. Self link of the export job. A URI that can be used to retrieve the status of an export job. Example: <c>/organizations/myorg/environments/myenv/analytics/exports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("self")]
    public string? Self { get; init; }

    /// <summary>
    /// Description of the export job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Output only. Execution time for this export job. If the job is still in progress, it will be set to the amount of time that has elapsed since<c>created</c>, in seconds. Else, it will set to (<c>updated</c> - <c>created</c>), in seconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executionTime")]
    public string? ExecutionTime { get; init; }

    /// <summary>
    /// Output only. Status of the export job. Valid values include <c>enqueued</c>, <c>running</c>, <c>completed</c>, and <c>failed</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public string? State { get; init; }

    /// <summary>
    /// Name of the datastore that is the destination of the export job [datastore]
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("datastoreName")]
    public string? DatastoreName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
