using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record AugmentedManifestsListItem
{
    /// <summary>
    /// The Amazon S3 location of the augmented manifest file.
    /// </summary>
    [JsonPropertyName("S3Uri")]
    public required string S3Uri { get; init; }

    /// <summary>
    /// The purpose of the data you've provided in the augmented manifest. You can either train or test this data. If you don't specify, the default is train. TRAIN - all of the documents in the manifest will be used for training. If no test documents are provided, Amazon Comprehend will automatically reserve a portion of the training documents for testing. TEST - all of the documents in the manifest will be used for testing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Split")]
    public Split? Split { get; init; }

    /// <summary>
    /// The JSON attribute that contains the annotations for your training documents. The number of attribute names that you specify depends on whether your augmented manifest file is the output of a single labeling job or a chained labeling job. If your file is the output of a single labeling job, specify the LabelAttributeName key that was used when the job was created in Ground Truth. If your file is the output of a chained labeling job, specify the LabelAttributeName key for one or more jobs in the chain. Each LabelAttributeName key provides the annotations from an individual job.
    /// </summary>
    [JsonPropertyName("AttributeNames")]
    public required IReadOnlyList<string> AttributeNames { get; init; }

    /// <summary>
    /// The S3 prefix to the annotation files that are referred in the augmented manifest file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AnnotationDataS3Uri")]
    public string? AnnotationDataS3Uri { get; init; }

    /// <summary>
    /// The S3 prefix to the source files (PDFs) that are referred to in the augmented manifest file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SourceDocumentsS3Uri")]
    public string? SourceDocumentsS3Uri { get; init; }

    /// <summary>
    /// The type of augmented manifest. PlainTextDocument or SemiStructuredDocument. If you don't specify, the default is PlainTextDocument. PLAIN_TEXT_DOCUMENT A document type that represents any unicode text that is encoded in UTF-8. SEMI_STRUCTURED_DOCUMENT A document type with positional and structural context, like a PDF. For training with Amazon Comprehend, only PDFs are supported. For inference, Amazon Comprehend support PDFs, DOCX and TXT.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DocumentType")]
    public DocumentType? DocumentType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
