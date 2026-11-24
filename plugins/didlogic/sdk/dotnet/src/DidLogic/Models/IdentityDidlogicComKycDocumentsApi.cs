using System.Text.Json.Serialization;
using DidLogic.Core.Models;
using DidLogic.Models.Enums;

namespace DidLogic.Models;

/// <summary>
/// Identity details
/// </summary>
public record IdentityDidlogicComKycDocumentsApi
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
    /// Identity creation timestamp
    /// </summary>
    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    /// <summary>
    /// Identity persistence status
    /// </summary>
    [JsonPropertyName("persistence_status")]
    public required PersistenceStatus PersistenceStatus { get; init; }

    /// <summary>
    /// Is default identity flag
    /// </summary>
    [JsonPropertyName("is_default")]
    public required bool IsDefault { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
