using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

/// <summary>
/// Visual signature image.
/// </summary>
public record VisualSignatureImage
{
    /// <summary>
    /// Base64 encoded bytes of content.
    /// </summary>
    [JsonPropertyName("content")]
    public required string Content { get; init; }

    /// <summary>
    /// Content type of bytes sent in content. At the moment this MUST be image/png
    /// </summary>
    [JsonPropertyName("content_type")]
    public required string ContentType { get; init; }

    /// <summary>
    /// Size of <c>content</c> in bytes. Calculated by the server.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_size")]
    public int? ContentSize { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
