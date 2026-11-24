using System;
using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record CreateApiKey
{
    /// <summary>
    /// Optional: when this key stops working (RFC 3339). Omit for a key that
    /// never expires — the behaviour of every key issued before 2026-07-31.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expires_at")]
    public DateTimeOffset? ExpiresAt { get; init; }

    /// <summary>
    /// Human-readable label for the key. Stored verbatim; visible in the
    /// dashboard and in <c>last_used</c> audit logs. Recommended: identify the
    /// integration + environment, e.g. <c>"acme-dev-connector-v1"</c>.
    /// </summary>
    [JsonPropertyName("key_name")]
    public required string KeyName { get; init; }

    /// <summary>
    /// Optional: scope this key to a single workspace. If omitted, the key
    /// uses the user's current_workspace_id at each request (legacy
    /// behavior). To scope to a workspace, the caller must be a member
    /// of it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workspace_id")]
    public long? WorkspaceId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
