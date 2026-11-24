using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record DatasetDescription
{
    /// <summary>
    /// The Unix timestamp for the time and date that the dataset was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTimestamp")]
    public DateTimeOffset? CreationTimestamp { get; init; }

    /// <summary>
    /// The Unix timestamp for the date and time that the dataset was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LastUpdatedTimestamp")]
    public DateTimeOffset? LastUpdatedTimestamp { get; init; }

    /// <summary>
    /// The status of the dataset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public Status? Status { get; init; }

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

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DatasetStats")]
    public DatasetStats? DatasetStats { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
