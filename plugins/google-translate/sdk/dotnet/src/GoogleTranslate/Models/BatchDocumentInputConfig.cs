using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Input configuration for BatchTranslateDocument request.
/// </summary>
public record BatchDocumentInputConfig
{
    /// <summary>
    /// Google Cloud Storage location for the source input. This can be a single file (for example, <c>gs://translation-test/input.docx</c>) or a wildcard (for example, <c>gs://translation-test/*</c>). File mime type is determined based on extension. Supported mime type includes: - <c>pdf</c>, application/pdf - <c>docx</c>, application/vnd.openxmlformats-officedocument.wordprocessingml.document - <c>pptx</c>, application/vnd.openxmlformats-officedocument.presentationml.presentation - <c>xlsx</c>, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet The max file size to support for <c>.docx</c>, <c>.pptx</c> and <c>.xlsx</c> is 100MB. The max file size to support for <c>.pdf</c> is 1GB and the max page limit is 1000 pages. The max file size to support for all input documents is 1GB.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gcsSource")]
    public GcsSource4? GcsSource { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
