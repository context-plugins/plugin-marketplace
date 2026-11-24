using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record ApiKeyModel
{
    /// <summary>
    /// RFC 3339 UTC timestamp.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public string? CreatedAt { get; init; }

    /// <summary>
    /// When the key stops authenticating (RFC 3339). <c>null</c> = never expires,
    /// which is the case for every key issued before 2026-07-31.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expires_at")]
    public string? ExpiresAt { get; init; }

    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// Human-readable label for the key (shown in the dashboard).
    /// </summary>
    [JsonPropertyName("key_name")]
    public required string KeyName { get; init; }

    /// <summary>
    /// Display-safe prefix of the key (first 12 characters + "..."). Always
    /// present. Use this to identify the key in logs and UIs.
    /// </summary>
    [JsonPropertyName("key_prefix")]
    public required string KeyPrefix { get; init; }

    /// <summary>
    /// The full bearer token, format <c>sk_&lt;base64(32 random bytes)&gt;</c>.
    /// <b>Returned only in the response to <c>POST /api/keys</c></b> — Audioscrape
    /// stores only a SHA-256 hash, so list / delete endpoints cannot
    /// recover the raw value. Save it client-side immediately on creation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key_value")]
    public string? KeyValue { get; init; }

    /// <summary>
    /// RFC 3339 UTC timestamp of the most recent request that used this key.
    /// <c>null</c> if the key has never been used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_used")]
    public string? LastUsed { get; init; }

    /// <summary>
    /// Source IP of the request described by <c>last_used</c> (as seen by our
    /// edge). <c>null</c> if the key has never been used or the IP was
    /// unavailable. Use it to spot a leaked key being used from somewhere
    /// unexpected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_used_ip")]
    public string? LastUsedIp { get; init; }

    /// <summary>
    /// Workspace this key is scoped to. <c>null</c> means the key follows the
    /// user's <c>current_workspace_id</c> at request time (legacy behavior).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workspace_id")]
    public long? WorkspaceId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
