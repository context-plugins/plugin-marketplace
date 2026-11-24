using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record CreateSendToRequest
{
    /// <summary>
    /// Title of the document.
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// Base64 Encoded Document.
    /// </summary>
    [JsonPropertyName("content")]
    public required string Content { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
