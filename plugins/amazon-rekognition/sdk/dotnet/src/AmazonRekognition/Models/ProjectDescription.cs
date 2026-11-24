using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record ProjectDescription
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ProjectArn")]
    public string? ProjectArn { get; init; }

    /// <summary>
    /// The Unix timestamp for the date and time that the project was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTimestamp")]
    public DateTimeOffset? CreationTimestamp { get; init; }

    /// <summary>
    /// The current status of the project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public Status2? Status { get; init; }

    /// <summary>
    /// Information about the training and test datasets in the project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Datasets")]
    public IReadOnlyList<DatasetMetadata>? Datasets { get; init; }

    /// <summary>
    /// Specifies the project that is being customized.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Feature")]
    public Feature2? Feature { get; init; }

    /// <summary>
    /// Indicates whether automatic retraining will be attempted for the versions of the project. Applies only to adapters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AutoUpdate")]
    public AutoUpdate1? AutoUpdate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
