using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record DatasetMetadata
{
    /// <summary>
    /// The Unix timestamp for the date and time that the dataset was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTimestamp")]
    public DateTimeOffset? CreationTimestamp { get; init; }

    /// <summary>
    /// The type of the dataset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DatasetType")]
    public DatasetTypeAmazonRekognitionProjectApi? DatasetType { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) for the dataset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DatasetArn")]
    public string? DatasetArn { get; init; }

    /// <summary>
    /// The status for the dataset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public StatusAmazonRekognitionProjectApi? Status { get; init; }

    /// <summary>
    /// The status message for the dataset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StatusMessage")]
    public string? StatusMessage { get; init; }

    /// <summary>
    /// The status message code for the dataset operation. If a service error occurs, try the API call again later. If a client error occurs, check the input parameters to the dataset API call that failed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StatusMessageCode")]
    public StatusMessageCode? StatusMessageCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
