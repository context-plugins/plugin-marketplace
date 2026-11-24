using System;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record DocSlim
{
    /// <summary>
    /// The public id of the Doc
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// The Docs Title
    /// </summary>
    [JsonPropertyName("title")]
    public required string? Title { get; init; }

    /// <summary>
    /// The Shortcut application url for the Doc.
    /// </summary>
    [JsonPropertyName("app_url")]
    public required string AppUrl { get; init; }
}
