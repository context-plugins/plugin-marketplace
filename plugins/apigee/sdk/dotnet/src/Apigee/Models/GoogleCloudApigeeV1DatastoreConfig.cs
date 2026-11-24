using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Configuration detail for datastore
/// </summary>
public record GoogleCloudApigeeV1DatastoreConfig
{
    /// <summary>
    /// Required. Google Cloud project in which the datastore exists
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("projectId")]
    public string? ProjectId { get; init; }

    /// <summary>
    /// Path of Cloud Storage bucket Required for <c>gcs</c> target_type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("path")]
    public string? Path { get; init; }

    /// <summary>
    /// Name of the Cloud Storage bucket. Required for <c>gcs</c> target_type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bucketName")]
    public string? BucketName { get; init; }

    /// <summary>
    /// BigQuery dataset name Required for <c>bigquery</c> target_type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("datasetName")]
    public string? DatasetName { get; init; }

    /// <summary>
    /// Prefix of BigQuery table Required for <c>bigquery</c> target_type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tablePrefix")]
    public string? TablePrefix { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
