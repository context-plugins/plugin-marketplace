using System;
using System.Text.Json.Serialization;
using Rendex.Core.Models;

namespace Rendex.Models;

public record Data3
{
    /// <summary>
    /// Signed URL of the rendered PDF (present when 'pdf' was requested).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pdfUrl")]
    public string? PdfUrl { get; init; }

    /// <summary>
    /// Signed URL of the rendered PNG (present when 'png' was requested).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pngUrl")]
    public string? PngUrl { get; init; }

    /// <summary>
    /// Signed URL of a hosted share page previewing the artifact.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shareUrl")]
    public string? ShareUrl { get; init; }

    /// <summary>
    /// When the signed URLs expire.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiresAt")]
    public DateTimeOffset? ExpiresAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
