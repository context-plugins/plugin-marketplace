using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1MarkdowntoimageRequest
{
    /// <summary>
    /// Markdown text to convert
    /// </summary>
    [JsonPropertyName("markdown")]
    public required string Markdown { get; init; }

    /// <summary>
    /// Image width in pixels
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("width")]
    public int? Width { get; init; }

    /// <summary>
    /// Image height in pixels
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("height")]
    public int? Height { get; init; }

    /// <summary>
    /// Output image format
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("format")]
    public string? Format { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
