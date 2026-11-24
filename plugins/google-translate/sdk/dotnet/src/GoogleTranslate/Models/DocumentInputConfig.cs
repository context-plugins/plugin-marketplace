using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// A document translation request input config.
/// </summary>
public record DocumentInputConfig
{
    /// <summary>
    /// Google Cloud Storage location. This must be a single file. For example: gs://example_bucket/example_file.pdf
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gcsSource")]
    public GcsSource1? GcsSource { get; init; }

    /// <summary>
    /// Document's content represented as a stream of bytes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content")]
    public string? Content { get; init; }

    /// <summary>
    /// Specifies the input document's mime_type. If not specified it will be determined using the file extension for gcs_source provided files. For a file provided through bytes content the mime_type must be provided. Currently supported mime types are: - application/pdf - application/vnd.openxmlformats-officedocument.wordprocessingml.document - application/vnd.openxmlformats-officedocument.presentationml.presentation - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mimeType")]
    public string? MimeType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
