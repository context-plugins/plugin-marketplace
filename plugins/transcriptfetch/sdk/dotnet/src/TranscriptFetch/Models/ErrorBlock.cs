using System.Collections.Generic;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Models;
using TranscriptFetch.Core.Validation;
using TranscriptFetch.Core.Validation.Attributes;
using TranscriptFetch.Models.Enums;

namespace TranscriptFetch.Models;

/// <summary>
/// Every failure carries this block. Branch on code (a stable string) or number (a stable integer whose thousands digit is the family: 1 request, 2 account, 3 input, 4 content, 5 transient, 9 ours; 5xxx means retry with backoff). At most one of retry_with, details, issues is present. Failures are never charged.
/// </summary>
public record ErrorBlock
{
    [JsonPropertyName("code")]
    public required Code1 Code { get; init; }

    [JsonPropertyName("number")]
    public required Number Number { get; init; }

    /// <summary>
    /// Prose for humans. Never parse it.
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// https://transcriptfetch.com/docs/errors/&lt;code&gt;
    /// </summary>
    [JsonPropertyName("docs")]
    [Format(FormatKind.Uri)]
    public required string Docs { get; init; }

    /// <summary>
    /// Present when a different request would succeed: the fields to change, e.g. { "mode": "audio" } to transcribe a captionless video, or { "endpoint": "/api/v2/transcripts/video" } for a platform this endpoint does not list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retry_with")]
    public object? RetryWith { get; init; }

    /// <summary>
    /// Structured specifics for the few codes that document one: batch_too_large { max, sent }, podcast_feed_not_found { reason, candidates? }.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("details")]
    public object? Details { get; init; }

    /// <summary>
    /// Field-level validation problems (invalid_request only).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("issues")]
    public IReadOnlyList<object>? Issues { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
