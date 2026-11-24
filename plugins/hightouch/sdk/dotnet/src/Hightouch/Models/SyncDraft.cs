using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hightouch.Models.Enums;

namespace Hightouch.Models;

/// <summary>
/// A proposed change to a sync that waits for approval. Approving it applies
/// the change; rejecting it closes it without applying anything.
/// </summary>
public record SyncDraft
{
    /// <summary>
    /// The draft's id
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The id of the sync the draft changes
    /// </summary>
    [JsonPropertyName("syncId")]
    public required string SyncId { get; init; }

    /// <summary>
    /// <c>create</c> publishes a new sync, <c>update</c> changes an existing one
    /// </summary>
    [JsonPropertyName("operation")]
    public required Operation Operation { get; init; }

    /// <summary>
    /// The state of a sync draft. New values may be added, so treat an unknown
    /// value as closed.
    /// </summary>
    [JsonPropertyName("status")]
    public required SyncDraftStatus Status { get; init; }

    /// <summary>
    /// The user who submitted the draft
    /// </summary>
    [JsonPropertyName("requestedBy")]
    public required UserReference RequestedBy { get; init; }

    /// <summary>
    /// The users asked to review the draft
    /// </summary>
    [JsonPropertyName("requestedApprovers")]
    public required IReadOnlyList<UserReference> RequestedApprovers { get; init; }

    /// <summary>
    /// The comment the requester left for reviewers
    /// </summary>
    [JsonPropertyName("requestComment")]
    public required string? RequestComment { get; init; }

    /// <summary>
    /// The timestamp when the draft was created
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The timestamp when the draft last changed
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// The user who approved or rejected the draft. With an API key, this is the
    /// user who owns the key.
    /// </summary>
    [JsonPropertyName("reviewedBy")]
    public required UserReference ReviewedBy { get; init; }

    /// <summary>
    /// The timestamp when the draft was approved or rejected
    /// </summary>
    [JsonPropertyName("reviewedAt")]
    public required DateTimeOffset? ReviewedAt { get; init; }

    /// <summary>
    /// The metadata sent with the approval or rejection
    /// </summary>
    [JsonPropertyName("reviewMetadata")]
    public required ReviewMetadata? ReviewMetadata { get; init; }
}
