using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;
using AmazonForecast.Models.Enums;

namespace AmazonForecast.Models;

public record DescribeDatasetImportJobResponse
{
    /// <summary>
    /// The name of the dataset import job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DatasetImportJobName")]
    public string? DatasetImportJobName { get; init; }

    /// <summary>
    /// The ARN of the dataset import job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DatasetImportJobArn")]
    public string? DatasetImportJobArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the dataset that the training data was imported to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DatasetArn")]
    public string? DatasetArn { get; init; }

    /// <summary>
    /// The format of timestamps in the dataset. The format that you specify depends on the DataFrequency specified when the dataset was created. The following formats are supported "yyyy-MM-dd" For the following data frequencies: Y, M, W, and D "yyyy-MM-dd HH:mm:ss" For the following data frequencies: H, 30min, 15min, and 1min; and optionally, for: Y, M, W, and D
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TimestampFormat")]
    public string? TimestampFormat { get; init; }

    /// <summary>
    /// The single time zone applied to every item in the dataset
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TimeZone")]
    public string? TimeZone { get; init; }

    /// <summary>
    /// Whether TimeZone is automatically derived from the geolocation attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UseGeolocationForTimeZone")]
    public bool? UseGeolocationForTimeZone { get; init; }

    /// <summary>
    /// The format of the geolocation attribute. Valid Values:"LAT_LONG" and "CC_POSTALCODE".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GeolocationFormat")]
    public string? GeolocationFormat { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DataSource")]
    public DataSource? DataSource { get; init; }

    /// <summary>
    /// The estimated time remaining in minutes for the dataset import job to complete.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EstimatedTimeRemainingInMinutes")]
    public int? EstimatedTimeRemainingInMinutes { get; init; }

    /// <summary>
    /// Statistical information about each field in the input data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FieldStatistics")]
    public IReadOnlyDictionary<string, Statistics>? FieldStatistics { get; init; }

    /// <summary>
    /// The size of the dataset in gigabytes (GB) after the import job has finished.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DataSize")]
    public double? DataSize { get; init; }

    /// <summary>
    /// The status of the dataset import job. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED CREATE_STOPPING, CREATE_STOPPED
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public string? Status { get; init; }

    /// <summary>
    /// If an error occurred, an informational message about the error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Message")]
    public string? Message { get; init; }

    /// <summary>
    /// When the dataset import job was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTime")]
    public DateTimeOffset? CreationTime { get; init; }

    /// <summary>
    /// The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LastModificationTime")]
    public DateTimeOffset? LastModificationTime { get; init; }

    /// <summary>
    /// The format of the imported data, CSV or PARQUET.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Format")]
    public string? Format { get; init; }

    /// <summary>
    /// The import mode of the dataset import job, FULL or INCREMENTAL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ImportMode")]
    public ImportMode1? ImportMode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
