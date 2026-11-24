using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record ClassifyDocumentRequest
{
    /// <summary>
    /// The document text to be analyzed. If you enter text using this parameter, do not use the Bytes parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Text")]
    public string? Text { get; init; }

    /// <summary>
    /// The Amazon Resource Number (ARN) of the endpoint. For prompt safety classification, Amazon Comprehend provides the endpoint ARN. For more information about prompt safety classifiers, see Prompt safety classification in the Amazon Comprehend Developer Guide For custom classification, you create an endpoint for your custom model. For more information, see Using Amazon Comprehend endpoints.
    /// </summary>
    [JsonPropertyName("EndpointArn")]
    public required string EndpointArn { get; init; }

    /// <summary>
    /// Use the Bytes parameter to input a text, PDF, Word or image file. When you classify a document using a custom model, you can also use the Bytes parameter to input an Amazon Textract DetectDocumentText or AnalyzeDocument output file. To classify a document using the prompt safety classifier, use the Text parameter for input. Provide the input document as a sequence of base64-encoded bytes. If your code uses an Amazon Web Services SDK to classify documents, the SDK may encode the document file bytes for you. The maximum length of this field depends on the input document type. For details, see In
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Bytes")]
    public string? Bytes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DocumentReaderConfig")]
    public DocumentReaderConfig? DocumentReaderConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
