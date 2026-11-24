using System.Collections.Generic;
using System.Text.Json.Serialization;
using Skribble.Core.Models;
using Skribble.Core.Validation;
using Skribble.Core.Validation.Attributes;

namespace Skribble.Models;

public record UploadDocumentRequest
{
    /// <summary>
    /// Title of the document.
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// Give specific users or API keys read access to this document.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("read_access")]
    public IReadOnlyList<string>? ReadAccess { get; init; }

    /// <summary>
    /// Give specific users or API keys write access to this document.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("write_access")]
    public IReadOnlyList<string>? WriteAccess { get; init; }

    /// <summary>
    /// Base64 encoded bytes of the document.
    /// </summary>
    [JsonPropertyName("content")]
    public required string Content { get; init; }

    /// <summary>
    /// Content type of bytes sent in content. Currently, only application/pdf is supported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_type")]
    public string? ContentType { get; init; }

    /// <summary>
    /// Publicly accessible URL for document download.
    /// </summary>
    [JsonPropertyName("file_url")]
    [Format(FormatKind.Uri)]
    public required string FileUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
