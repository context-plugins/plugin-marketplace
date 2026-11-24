using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// The document's translation output if a glossary is provided in the request. This can be the same as [TranslateDocumentResponse.document_translation] if no glossary terms apply.
/// </summary>
public record DocumentTranslation3
{
    /// <summary>
    /// The array of translated documents. It is expected to be size 1 for now. We may produce multiple translated documents in the future for other type of file formats.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("byteStreamOutputs")]
    public IReadOnlyList<string>? ByteStreamOutputs { get; init; }

    /// <summary>
    /// The detected language for the input document. If the user did not provide the source language for the input document, this field will have the language code automatically detected. If the source language was passed, auto-detection of the language does not occur and this field is empty.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detectedLanguageCode")]
    public string? DetectedLanguageCode { get; init; }

    /// <summary>
    /// The translated document's mime type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mimeType")]
    public string? MimeType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
