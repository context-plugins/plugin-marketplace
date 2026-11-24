using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record CreateStreamProcessorRequest
{
    [JsonPropertyName("Input")]
    public required StreamProcessorInput Input { get; init; }

    [JsonPropertyName("Output")]
    public required StreamProcessorOutput Output { get; init; }

    /// <summary>
    /// An identifier you assign to the stream processor. You can use Name to manage the stream processor. For example, you can get the current status of the stream processor by calling DescribeStreamProcessor. Name is idempotent. This is required for both face search and label detection stream processors.
    /// </summary>
    [JsonPropertyName("Name")]
    public required string Name { get; init; }

    [JsonPropertyName("Settings")]
    public required StreamProcessorSettings Settings { get; init; }

    /// <summary>
    /// The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor. The IAM role provides Rekognition read permissions for a Kinesis stream. It also provides write permissions to an Amazon S3 bucket and Amazon Simple Notification Service topic for a label detection stream processor. This is required for both face search and label detection stream processors.
    /// </summary>
    [JsonPropertyName("RoleArn")]
    public required string RoleArn { get; init; }

    /// <summary>
    /// A set of tags (key-value pairs) that you want to attach to the stream processor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyDictionary<string, string>? Tags { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NotificationChannel")]
    public StreamProcessorNotificationChannel? NotificationChannel { get; init; }

    /// <summary>
    /// The identifier for your AWS Key Management Service key (AWS KMS key). This is an optional parameter for label detection stream processors and should not be used to create a face search stream processor. You can supply the Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an alias ARN. The key is used to encrypt results and data published to your Amazon S3 bucket, which includes image frames and hero images. Your source images are unaffected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KmsKeyId")]
    public string? KmsKeyId { get; init; }

    /// <summary>
    /// Specifies locations in the frames where Amazon Rekognition checks for objects or people. You can specify up to 10 regions of interest, and each region has either a polygon or a bounding box. This is an optional parameter for label detection stream processors and should not be used to create a face search stream processor.
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
