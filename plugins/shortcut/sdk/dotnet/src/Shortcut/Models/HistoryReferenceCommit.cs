using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Shortcut.Core.Models;
using Shortcut.Models.AnyOf;

namespace Shortcut.Models;

/// <summary>
/// A reference to a VCS Commit.
/// </summary>
public record HistoryReferenceCommit
{
    /// <summary>
    /// The ID of the entity referenced.
    /// </summary>
    [JsonPropertyName("id")]
    public required Id Id { get; init; }

    /// <summary>
    /// The type of entity referenced.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// The message from the Commit.
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// The external URL for the Branch.
    /// </summary>
    [JsonPropertyName("url")]
    [MaxLength(2048)]
    [RegularExpression("^https?://.+$")]
    public required string Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
