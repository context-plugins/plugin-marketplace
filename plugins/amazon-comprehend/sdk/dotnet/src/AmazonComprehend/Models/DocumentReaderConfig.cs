using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record DocumentReaderConfig
{
    /// <summary>
    /// This field defines the Amazon Textract API operation that Amazon Comprehend uses to extract text from PDF files and image files. Enter one of the following values: TEXTRACT_DETECT_DOCUMENT_TEXT - The Amazon Comprehend service uses the DetectDocumentText API operation. TEXTRACT_ANALYZE_DOCUMENT - The Amazon Comprehend service uses the AnalyzeDocument API operation.
    /// </summary>
    [JsonPropertyName("DocumentReadAction")]
    public required DocumentReadAction DocumentReadAction { get; init; }

    /// <summary>
    /// Determines the text extraction actions for PDF files. Enter one of the following values: SERVICE_DEFAULT - use the Amazon Comprehend service defaults for PDF files. FORCE_DOCUMENT_READ_ACTION - Amazon Comprehend uses the Textract API specified by DocumentReadAction for all PDF files, including digital PDF files.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DocumentReadMode")]
    public DocumentReadMode? DocumentReadMode { get; init; }

    /// <summary>
    /// Specifies the type of Amazon Textract features to apply. If you chose TEXTRACT_ANALYZE_DOCUMENT as the read action, you must specify one or both of the following values: TABLES - Returns additional information about any tables that are detected in the input document. FORMS - Returns additional information about any forms that are detected in the input document.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FeatureTypes")]
    public IReadOnlyList<FeatureType>? FeatureTypes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
