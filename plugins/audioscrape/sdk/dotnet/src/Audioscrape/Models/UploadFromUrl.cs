using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

/// <summary>
/// JSON body for URL-based upload. Use this when the audio is already
/// hosted somewhere reachable from the public internet (S3 presigned URL,
/// CDN, your own server). Audioscrape downloads it and stores a copy so
/// transcription, indexing, and playback work even if your URL later
/// becomes unavailable.
/// </summary>
public record UploadFromUrl
{
    /// <summary>
    /// Publicly reachable <c>https://</c> URL of the audio file. Must NOT
    /// resolve to a private / internal IP range (SSRF guard).
    /// </summary>
    [JsonPropertyName("audio_url")]
    public required string AudioUrl { get; init; }

    /// <summary>
    /// What the audio IS (e.g. <c>phone_call</c>). Drives the Details panel,
    /// speaker-label suggestions, and processing hints. See GH#35.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_type")]
    public string? ContentType { get; init; }

    /// <summary>
    /// GH#617: opt in to derived titles (cleaned filename placeholder +
    /// transcript-derived title from the pipeline). Default OFF on the API:
    /// the title you send — or the file's own name — is treated as your
    /// deliberate choice and never rewritten.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("derive_title")]
    public bool? DeriveTitle { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Free-form, type-shaped metadata bag (descriptive fields + processing
    /// hints like num_speakers). Must be a JSON object. Stored on <c>items.metadata</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public object? Metadata { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
