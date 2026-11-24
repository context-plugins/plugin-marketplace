using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record CreateProjectVersionRequest
{
    /// <summary>
    /// The ARN of the Amazon Rekognition project that will manage the project version you want to train.
    /// </summary>
    [JsonPropertyName("ProjectArn")]
    public required string ProjectArn { get; init; }

    /// <summary>
    /// A name for the version of the project version. This value must be unique.
    /// </summary>
    [JsonPropertyName("VersionName")]
    public required string VersionName { get; init; }

    [JsonPropertyName("OutputConfig")]
    public required OutputConfig OutputConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TrainingData")]
    public TrainingData? TrainingData { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TestingData")]
    public TestingData? TestingData { get; init; }

    /// <summary>
    /// A set of tags (key-value pairs) that you want to attach to the project version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyDictionary<string, string>? Tags { get; init; }

    /// <summary>
    /// The identifier for your AWS Key Management Service key (AWS KMS key). You can supply the Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an alias ARN. The key is used to encrypt training images, test images, and manifest files copied into the service for the project version. Your source images are unaffected. The key is also used to encrypt training results and manifest files written to the output Amazon S3 bucket (OutputConfig). If you choose to use your own KMS key, you need the following permissions on the KMS key. kms:CreateGrant kms:Descri
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KmsKeyId")]
    public string? KmsKeyId { get; init; }

    /// <summary>
    /// A description applied to the project version being created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VersionDescription")]
    public string? VersionDescription { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FeatureConfig")]
    public CustomizationFeatureConfig? FeatureConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
