using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1MarkdownlinkextractorRequest
{
    /// <summary>
    /// Markdown text to parse (max 100,000 characters)
    /// </summary>
    [JsonPropertyName("markdown")]
    public required string Markdown { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
