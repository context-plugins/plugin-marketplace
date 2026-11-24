using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record Identity
{
    /// <summary>
    /// Identity identifier
    /// </summary>
    [JsonPropertyName("id")]
    public required int Id { get; init; }

    /// <summary>
    /// Identity name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Owner user ID
    /// </summary>
    [JsonPropertyName("user_id")]
    public required int UserId { get; init; }

    /// <summary>
    /// Creation timestamp
    /// </summary>
    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    [JsonPropertyName("persistence_status")]
    public required string PersistenceStatus { get; init; }

    [JsonPropertyName("is_default")]
    public required bool IsDefault { get; init; }

    /// <summary>
    /// Number of documents in this identity
    /// </summary>
    [JsonPropertyName("documents_count")]
    public required int DocumentsCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
