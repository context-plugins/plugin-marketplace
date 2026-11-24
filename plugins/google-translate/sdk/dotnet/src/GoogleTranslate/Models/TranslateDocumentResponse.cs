using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// A translated document response message.
/// </summary>
public record TranslateDocumentResponse
{
    /// <summary>
    /// The <c>glossary_config</c> used for this translation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("glossaryConfig")]
    public TranslateTextGlossaryConfig3? GlossaryConfig { get; init; }

    /// <summary>
    /// Only present when 'model' is present in the request. 'model' is normalized to have a project number. For example: If the 'model' field in TranslateDocumentRequest is: <c>projects/{project-id}/locations/{location-id}/models/general/nmt</c> then <c>model</c> here would be normalized to <c>projects/{project-number}/locations/{location-id}/models/general/nmt</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model")]
    public string? Model { get; init; }

    /// <summary>
    /// The document's translation output if a glossary is provided in the request. This can be the same as [TranslateDocumentResponse.document_translation] if no glossary terms apply.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("glossaryDocumentTranslation")]
    public DocumentTranslation3? GlossaryDocumentTranslation { get; init; }

    /// <summary>
    /// Translated document.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentTranslation")]
    public DocumentTranslation1? DocumentTranslation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
