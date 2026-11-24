using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1MarkdowntopdfRequest
{
    /// <summary>
    /// Markdown text to convert (max 100,000 characters)
    /// </summary>
    [JsonPropertyName("markdown")]
    public required string Markdown { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
