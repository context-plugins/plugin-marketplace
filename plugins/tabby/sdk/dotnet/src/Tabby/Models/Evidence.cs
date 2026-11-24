using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

public record Evidence
{
    /// <summary>
    /// Evidence ID.
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// Dispute ID.
    /// </summary>
    [JsonPropertyName("dispute_id")]
    public required Guid DisputeId { get; init; }

    /// <summary>
    /// Evidence content.
    /// </summary>
    [JsonPropertyName("content")]
    public required string Content { get; init; }

    /// <summary>
    /// Who created the evidence.
    /// </summary>
    [JsonPropertyName("created_by")]
    public required string CreatedBy { get; init; }

    /// <summary>
    /// Creation timestamp in UTC, ISO 8601 datetime format.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// Array of attachment IDs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachment_ids")]
    public IReadOnlyList<Guid>? AttachmentIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
