using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record DatasetProperties
{
    /// <summary>
    /// The ARN of the dataset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DatasetArn")]
    public string? DatasetArn { get; init; }

    /// <summary>
    /// The name of the dataset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DatasetName")]
    public string? DatasetName { get; init; }

    /// <summary>
    /// The dataset type (training data or test data).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DatasetType")]
    public DatasetType2? DatasetType { get; init; }

    /// <summary>
    /// The S3 URI where the dataset is stored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DatasetS3Uri")]
    public string? DatasetS3Uri { get; init; }

    /// <summary>
    /// Description of the dataset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Description")]
    public string? Description { get; init; }

    /// <summary>
    /// The dataset status. While the system creates the dataset, the status is CREATING. When the dataset is ready to use, the status changes to COMPLETED.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public Status1? Status { get; init; }

    /// <summary>
    /// A description of the status of the dataset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Message")]
    public string? Message { get; init; }

    /// <summary>
    /// The number of documents in the dataset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NumberOfDocuments")]
    public int? NumberOfDocuments { get; init; }

    /// <summary>
    /// Creation time of the dataset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTime")]
    public DateTimeOffset? CreationTime { get; init; }

    /// <summary>
    /// Time when the data from the dataset becomes available in the data lake.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndTime")]
    public DateTimeOffset? EndTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
