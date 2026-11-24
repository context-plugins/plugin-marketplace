using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record ClassifyDocumentResponse
{
    /// <summary>
    /// The classes used by the document being analyzed. These are used for models trained in multi-class mode. Individual classes are mutually exclusive and each document is expected to have only a single class assigned to it. For example, an animal can be a dog or a cat, but not both at the same time. For prompt safety classification, the response includes only two classes (SAFE_PROMPT and UNSAFE_PROMPT), along with a confidence score for each class. The value range of the score is zero to one, where one is the highest confidence.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Classes")]
    public IReadOnlyList<DocumentClass>? Classes { get; init; }

    /// <summary>
    /// The labels used in the document being analyzed. These are used for multi-label trained models. Individual labels represent different categories that are related in some manner and are not mutually exclusive. For example, a movie can be just an action movie, or it can be an action movie, a science fiction movie, and a comedy, all at the same time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Labels")]
    public IReadOnlyList<DocumentLabel>? Labels { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DocumentMetadata")]
    public DocumentMetadata? DocumentMetadata { get; init; }

    /// <summary>
    /// The document type for each page in the input document. This field is present in the response only if your request includes the Byte parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DocumentType")]
    public IReadOnlyList<DocumentTypeListItem>? DocumentType { get; init; }

    /// <summary>
    /// Page-level errors that the system detected while processing the input document. The field is empty if the system encountered no errors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Errors")]
    public IReadOnlyList<ErrorsListItem>? Errors { get; init; }

    /// <summary>
    /// Warnings detected while processing the input document. The response includes a warning if there is a mismatch between the input document type and the model type associated with the endpoint that you specified. The response can also include warnings for individual pages that have a mismatch. The field is empty if the system generated no warnings.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Warnings")]
    public IReadOnlyList<WarningsListItem>? Warnings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
