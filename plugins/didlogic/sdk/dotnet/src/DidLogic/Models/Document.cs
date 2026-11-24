using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;
using DidLogic.Models.Enums;

namespace DidLogic.Models;

public record Document
{
    /// <summary>
    /// Document name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Document identifier
    /// </summary>
    [JsonPropertyName("id")]
    public required int Id { get; init; }

    /// <summary>
    /// Owner user ID
    /// </summary>
    [JsonPropertyName("user_id")]
    public required int UserId { get; init; }

    /// <summary>
    /// Country of the document, as given at upload; for a letter of intent, the country of the purchased number
    /// </summary>
    [JsonPropertyName("country")]
    public required string Country { get; init; }

    /// <summary>
    /// Upload timestamp
    /// </summary>
    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    /// <summary>
    /// Document expiration timestamp
    /// </summary>
    [JsonPropertyName("expired_at")]
    public required string ExpiredAt { get; init; }

    /// <summary>
    /// Document approval status (in review = pending, verified = approved)
    /// </summary>
    [JsonPropertyName("approvement_status")]
    public required ApprovementStatus1 ApprovementStatus { get; init; }

    /// <summary>
    /// Document type identifier
    /// </summary>
    [JsonPropertyName("doc_type")]
    public required DocType DocType { get; init; }

    /// <summary>
    /// Associated identity ID
    /// </summary>
    [JsonPropertyName("identity_id")]
    public required int IdentityId { get; init; }

    /// <summary>
    /// Identity details
    /// </summary>
    [JsonPropertyName("identity")]
    public required IdentityDidlogicComKycDocumentsApi Identity { get; init; }

    /// <summary>
    /// Document files
    /// </summary>
    [JsonPropertyName("files")]
    public required IReadOnlyList<File> Files { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
