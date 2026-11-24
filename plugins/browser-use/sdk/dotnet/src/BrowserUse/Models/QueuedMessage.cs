using System;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;
using BrowserUse.Models.AnyOf;
using BrowserUse.Models.Enums;

namespace BrowserUse.Models;

/// <summary>
/// One message on a session's queue (a v4_session_input row).
/// </summary>
public record QueuedMessage
{
    [JsonPropertyName("id")]
    public required int Id { get; init; }

    [JsonPropertyName("sessionId")]
    public required Guid SessionId { get; init; }

    [JsonPropertyName("runId")]
    public required Runid RunId { get; init; }

    [JsonPropertyName("mode")]
    public required Mode Mode { get; init; }

    [JsonPropertyName("status")]
    public required StatusBrowserUsePublicApiV4SessionsApi Status { get; init; }

    [JsonPropertyName("text")]
    public required string Text { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachedFileIds")]
    public Attachedfileids? AttachedFileIds { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
