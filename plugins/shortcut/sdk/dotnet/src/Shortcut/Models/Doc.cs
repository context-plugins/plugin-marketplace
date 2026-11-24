using System;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record Doc
{
    /// <summary>
    /// The public id of the Doc
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// The Doc's title
    /// </summary>
    [JsonPropertyName("title")]
    public required string? Title { get; init; }

    /// <summary>
    /// The Doc's content in Markdown format (converted from HTML storage).
    /// </summary>
    [JsonPropertyName("content_markdown")]
    public required string? ContentMarkdown { get; init; }

    /// <summary>
    /// The Doc's content in HTML format (as stored in S3). Only included when include_html=true query parameter is provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_html")]
    public string? ContentHtml { get; init; }

    /// <summary>
    /// The Shortcut application url for the Doc
    /// </summary>
    [JsonPropertyName("app_url")]
    public required string AppUrl { get; init; }

    /// <summary>
    /// The time/date the Doc was created
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The time/date the Doc was last updated
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// Whether the Doc is archived
    /// </summary>
    [JsonPropertyName("archived")]
    public required bool Archived { get; init; }
}
