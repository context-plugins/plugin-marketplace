using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record CreateDocumentClassifierRequest
{
    /// <summary>
    /// The name of the document classifier.
    /// </summary>
    [JsonPropertyName("DocumentClassifierName")]
    public required string DocumentClassifierName { get; init; }

    /// <summary>
    /// The version name given to the newly created classifier. Version names can have a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The version name must be unique among all models with the same classifier name in the Amazon Web Services account/Amazon Web Services Region.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VersionName")]
    public string? VersionName { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
    /// </summary>
    [JsonPropertyName("DataAccessRoleArn")]
    public required string DataAccessRoleArn { get; init; }

    /// <summary>
    /// Tags to associate with the document classifier. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonPropertyName("InputDataConfig")]
    public required DocumentClassifierInputDataConfig InputDataConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OutputDataConfig")]
    public DocumentClassifierOutputDataConfig? OutputDataConfig { get; init; }

    /// <summary>
    /// A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ClientRequestToken")]
    public string? ClientRequestToken { get; init; }

    /// <summary>
    /// The language of the input documents. You can specify any of the languages supported by Amazon Comprehend. All documents must be in the same language.
    /// </summary>
    [JsonPropertyName("LanguageCode")]
    public required LanguageCode6 LanguageCode { get; init; }

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
    /// Indicates the mode in which the classifier will be trained. The classifier can be trained in multi-class (single-label) mode or multi-label mode. Multi-class mode identifies a single class label for each document and multi-label mode identifies one or more class labels for each document. Multiple labels for an individual document are separated by a delimiter. The default delimiter between labels is a pipe (|).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Mode")]
    public Mode? Mode { get; init; }

    /// <summary>
    /// ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ModelKmsKeyId")]
    public string? ModelKmsKeyId { get; init; }

    /// <summary>
    /// The resource-based policy to attach to your custom document classifier model. You can use this policy to allow another Amazon Web Services account to import your custom model. Provide your policy as a JSON body that you enter as a UTF-8 encoded string without line breaks. To provide valid JSON, enclose the attribute names and values in double quotes. If the JSON body is also enclosed in double quotes, then you must escape the double quotes that are inside the policy: "{\"attribute\": \"value\", \"attribute\": [\"value\"]}" To avoid escaping quotes, you can use single quotes to enclose the poli
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ModelPolicy")]
    public string? ModelPolicy { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
