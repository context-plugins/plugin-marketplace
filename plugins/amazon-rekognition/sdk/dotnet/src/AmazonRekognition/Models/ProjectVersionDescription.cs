using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record ProjectVersionDescription
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the project version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ProjectVersionArn")]
    public string? ProjectVersionArn { get; init; }

    /// <summary>
    /// The Unix datetime for the date and time that training started.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTimestamp")]
    public DateTimeOffset? CreationTimestamp { get; init; }

    /// <summary>
    /// The minimum number of inference units used by the model. Applies only to Custom Labels projects. For more information, see StartProjectVersion.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MinInferenceUnits")]
    public int? MinInferenceUnits { get; init; }

    /// <summary>
    /// The current status of the model version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public Status1AmazonRekognitionProjectVersionApi? Status { get; init; }

    /// <summary>
    /// A descriptive message for an error or warning that occurred.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StatusMessage")]
    public string? StatusMessage { get; init; }

    /// <summary>
    /// The duration, in seconds, that you were billed for a successful training of the model version. This value is only returned if the model version has been successfully trained.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BillableTrainingTimeInSeconds")]
    public int? BillableTrainingTimeInSeconds { get; init; }

    /// <summary>
    /// The Unix date and time that training of the model ended.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TrainingEndTimestamp")]
    public DateTimeOffset? TrainingEndTimestamp { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OutputConfig")]
    public OutputConfig? OutputConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TrainingDataResult")]
    public TrainingDataResult? TrainingDataResult { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TestingDataResult")]
    public TestingDataResult? TestingDataResult { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EvaluationResult")]
    public EvaluationResult? EvaluationResult { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ManifestSummary")]
    public GroundTruthManifest? ManifestSummary { get; init; }

    /// <summary>
    /// The identifer for the AWS Key Management Service key (AWS KMS key) that was used to encrypt the model during training.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KmsKeyId")]
    public string? KmsKeyId { get; init; }

    /// <summary>
    /// The maximum number of inference units Amazon Rekognition uses to auto-scale the model. Applies only to Custom Labels projects. For more information, see StartProjectVersion.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxInferenceUnits")]
    public int? MaxInferenceUnits { get; init; }

    /// <summary>
    /// If the model version was copied from a different project, SourceProjectVersionArn contains the ARN of the source model version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SourceProjectVersionArn")]
    public string? SourceProjectVersionArn { get; init; }

    /// <summary>
    /// A user-provided description of the project version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VersionDescription")]
    public string? VersionDescription { get; init; }

    /// <summary>
    /// The feature that was customized.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Feature")]
    public FeatureAmazonRekognitionProjectVersionApi? Feature { get; init; }

    /// <summary>
    /// The base detection model version used to create the project version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BaseModelVersion")]
    public string? BaseModelVersion { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FeatureConfig")]
    public CustomizationFeatureConfig? FeatureConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
