using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record CreateSignatureAttachmentRequest
{
    /// <summary>
    /// File name of the attachment.
    /// </summary>
    [JsonPropertyName("filename")]
    public required string Filename { get; init; }

    /// <summary>
    /// Content type of the attachment. Supported types:
    /// <c>application/pdf</c>, <c>application/x-tika-msoffice</c>, <c>application/x-tika-ooxml</c>,
    /// <c>application/msword</c>, <c>application/vnd.openxmlformats-officedocument.wordprocessingml.document</c>,
    /// <c>application/vnd.ms-word.document.macroEnabled.12</c>, <c>application/vnd.ms-excel</c>,
    /// <c>application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</c>,
    /// <c>application/vnd.ms-excel.sheet.macroenabled.12</c>, <c>application/vnd.ms-powerpoint</c>,
    /// <c>application/vnd.openxmlformats-officedocument.presentationml.presentation</c>,
    /// <c>application/vnd.ms-powerpoint.presentation.macroEnabled.12</c>,
    /// <c>image/gif</c>, <c>image/jpeg</c>, <c>image/png</c>, <c>text/plain</c>
    /// </summary>
    [JsonPropertyName("content_type")]
    public required string ContentType { get; init; }

    /// <summary>
    /// Base64 encoded bytes of the attachment.
    /// </summary>
    [JsonPropertyName("content")]
    public required string Content { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
