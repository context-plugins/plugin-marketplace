using System.Collections.Generic;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;
using BrowserUse.Models.AnyOf;

namespace BrowserUse.Models;

/// <summary>
/// One entry per session (the session's most recent run), most-recent first.
/// <para>
/// A V4 session is a conversation: every follow-up run reuses the same
/// public_session_id. GET /api/v4/runs returns one row per RUN, so callers that
/// want a list of distinct *sessions* (e.g. the recent-sessions panel) should
/// use this instead of de-duplicating runs client-side.
/// </para>
/// </summary>
public record SessionListResponse
{
    [JsonPropertyName("sessions")]
    public required IReadOnlyList<SessionInfo> Sessions { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextCursor")]
    public Nextcursor? NextCursor { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hasMore")]
    public bool? HasMore { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
