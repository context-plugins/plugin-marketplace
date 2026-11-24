using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record DocumentClassifierInputDataConfig
{
    /// <summary>
    /// The format of your training data: COMPREHEND_CSV: A two-column CSV file, where labels are provided in the first column, and documents are provided in the second. If you use this value, you must provide the S3Uri parameter in your request. AUGMENTED_MANIFEST: A labeled dataset that is produced by Amazon SageMaker Ground Truth. This file is in JSON lines format. Each line is a complete JSON object that contains a training document and its associated labels. If you use this value, you must provide the AugmentedManifests parameter in your request. If you don't specify a value, Amazon Comprehend us
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DataFormat")]
    public DataFormat1? DataFormat { get; init; }

    /// <summary>
    /// The Amazon S3 URI for the input data. The S3 bucket must be in the same Region as the API endpoint that you are calling. The URI can point to a single input file or it can provide the prefix for a collection of input files. For example, if you use the URI S3://bucketName/prefix, if the prefix is a single file, Amazon Comprehend uses that file as input. If more than one file begins with the prefix, Amazon Comprehend uses all of them as input. This parameter is required if you set DataFormat to COMPREHEND_CSV.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("S3Uri")]
    public string? S3Uri { get; init; }

    /// <summary>
    /// This specifies the Amazon S3 location that contains the test annotations for the document classifier. The URI must be in the same Amazon Web Services Region as the API endpoint that you are calling.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TestS3Uri")]
    public string? TestS3Uri { get; init; }

    /// <summary>
    /// Indicates the delimiter used to separate each label for training a multi-label classifier. The default delimiter between labels is a pipe (|). You can use a different character as a delimiter (if it's an allowed character) by specifying it under Delimiter for labels. If the training documents use a delimiter other than the default or the delimiter you specify, the labels on that line will be combined to make a single unique label, such as LABELLABELLABEL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LabelDelimiter")]
    public string? LabelDelimiter { get; init; }

    /// <summary>
    /// A list of augmented manifest files that provide training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth. This parameter is required if you set DataFormat to AUGMENTED_MANIFEST.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AugmentedManifests")]
    public IReadOnlyList<AugmentedManifestsListItem>? AugmentedManifests { get; init; }

    /// <summary>
    /// The type of input documents for training the model. Provide plain-text documents to create a plain-text model, and provide semi-structured documents to create a native document model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DocumentType")]
    public DocumentType2? DocumentType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Documents")]
    public DocumentClassifierDocuments? Documents { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DocumentReaderConfig")]
    public DocumentReaderConfig? DocumentReaderConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
