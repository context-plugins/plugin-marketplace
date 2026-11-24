using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;
using AmazonForecast.Models.Enums;

namespace AmazonForecast.Models;

public record DescribeDatasetResponse
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the dataset.
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
    /// The domain associated with the dataset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Domain")]
    public Domain1AmazonForecastServiceDatasetsApi? Domain { get; init; }

    /// <summary>
    /// The dataset type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DatasetType")]
    public DatasetType1? DatasetType { get; init; }

    /// <summary>
    /// The frequency of data collection. Valid intervals are Y (Year), M (Month), W (Week), D (Day), H (Hour), 30min (30 minutes), 15min (15 minutes), 10min (10 minutes), 5min (5 minutes), and 1min (1 minute). For example, "M" indicates every month and "30min" indicates every 30 minutes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DataFrequency")]
    public string? DataFrequency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Schema")]
    public Schema? Schema { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EncryptionConfig")]
    public EncryptionConfig? EncryptionConfig { get; init; }

    /// <summary>
    /// The status of the dataset. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED UPDATE_PENDING, UPDATE_IN_PROGRESS, UPDATE_FAILED The UPDATE states apply while data is imported to the dataset from a call to the CreateDatasetImportJob operation and reflect the status of the dataset import job. For example, when the import job status is CREATE_IN_PROGRESS, the status of the dataset is UPDATE_IN_PROGRESS. The Status of the dataset must be ACTIVE before you can import training data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public string? Status { get; init; }

    /// <summary>
    /// When the dataset was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTime")]
    public DateTimeOffset? CreationTime { get; init; }

    /// <summary>
    /// When you create a dataset, LastModificationTime is the same as CreationTime. While data is being imported to the dataset, LastModificationTime is the current time of the DescribeDataset call. After a CreateDatasetImportJob operation has finished, LastModificationTime is when the import job completed or failed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LastModificationTime")]
    public DateTimeOffset? LastModificationTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
