using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record DescribeStreamProcessorResponse
{
    /// <summary>
    /// Name of the stream processor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Name")]
    public string? Name { get; init; }

    /// <summary>
    /// ARN of the stream processor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StreamProcessorArn")]
    public string? StreamProcessorArn { get; init; }

    /// <summary>
    /// Current status of the stream processor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public StatusAmazonRekognitionStreamProcessorApi? Status { get; init; }

    /// <summary>
    /// Detailed status message about the stream processor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StatusMessage")]
    public string? StatusMessage { get; init; }

    /// <summary>
    /// Date and time the stream processor was created
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTimestamp")]
    public DateTimeOffset? CreationTimestamp { get; init; }

    /// <summary>
    /// The time, in Unix format, the stream processor was last updated. For example, when the stream processor moves from a running state to a failed state, or when the user starts or stops the stream processor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LastUpdateTimestamp")]
    public DateTimeOffset? LastUpdateTimestamp { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Input")]
    public StreamProcessorInput? Input { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Output")]
    public StreamProcessorOutput? Output { get; init; }

    /// <summary>
    /// ARN of the IAM role that allows access to the stream processor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RoleArn")]
    public string? RoleArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Settings")]
    public StreamProcessorSettings? Settings { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NotificationChannel")]
    public StreamProcessorNotificationChannel? NotificationChannel { get; init; }

    /// <summary>
    /// The identifier for your AWS Key Management Service key (AWS KMS key). This is an optional parameter for label detection stream processors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KmsKeyId")]
    public string? KmsKeyId { get; init; }

    /// <summary>
    /// Specifies locations in the frames where Amazon Rekognition checks for objects or people. This is an optional parameter for label detection stream processors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RegionsOfInterest")]
    public IReadOnlyList<RegionOfInterest>? RegionsOfInterest { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DataSharingPreference")]
    public StreamProcessorDataSharingPreference? DataSharingPreference { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
