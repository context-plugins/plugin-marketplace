using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record StartEntitiesDetectionJobRequest
{
    [JsonPropertyName("InputDataConfig")]
    public required InputDataConfig InputDataConfig { get; init; }

    [JsonPropertyName("OutputDataConfig")]
    public required OutputDataConfig OutputDataConfig { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. For more information, see Role-based permissions.
    /// </summary>
    [JsonPropertyName("DataAccessRoleArn")]
    public required string DataAccessRoleArn { get; init; }

    /// <summary>
    /// The identifier of the job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobName")]
    public string? JobName { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) that identifies the specific entity recognizer to be used by the StartEntitiesDetectionJob. This ARN is optional and is only used for a custom entity recognition job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EntityRecognizerArn")]
    public string? EntityRecognizerArn { get; init; }

    /// <summary>
    /// The language of the input documents. All documents must be in the same language. You can specify any of the languages supported by Amazon Comprehend. If custom entities recognition is used, this parameter is ignored and the language used for training the model is used instead.
    /// </summary>
    [JsonPropertyName("LanguageCode")]
    public required LanguageCode23 LanguageCode { get; init; }

    /// <summary>
    /// A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ClientRequestToken")]
    public string? ClientRequestToken { get; init; }

    /// <summary>
    /// ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VolumeKmsKeyId")]
    public string? VolumeKmsKeyId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VpcConfig")]
    public VpcConfig? VpcConfig { get; init; }

    /// <summary>
    /// Tags to associate with the entities detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    /// <summary>
    /// The Amazon Resource Number (ARN) of the flywheel associated with the model to use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FlywheelArn")]
    public string? FlywheelArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
