using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Shortcut.Core.Models;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

/// <summary>
/// An action representing various operations for a Pull Request.
/// </summary>
public record HistoryActionPullRequest
{
    /// <summary>
    /// The ID of the entity referenced.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// The type of entity referenced.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// The action of the entity referenced.
    /// </summary>
    [JsonPropertyName("action")]
    public required ActionEnum Action { get; init; }

    /// <summary>
    /// The VCS Repository-specific ID for the Pull Request.
    /// </summary>
    [JsonPropertyName("number")]
    public required long Number { get; init; }

    /// <summary>
    /// The title of the Pull Request.
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// The URL from the provider of the VCS Pull Request.
    /// </summary>
    [JsonPropertyName("url")]
    [MaxLength(2048)]
    [RegularExpression("^https?://.+$")]
    public required string Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
