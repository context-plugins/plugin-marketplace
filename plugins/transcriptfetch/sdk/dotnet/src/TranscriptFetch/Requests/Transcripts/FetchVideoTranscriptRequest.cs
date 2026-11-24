using System.ComponentModel.DataAnnotations;
using TranscriptFetch.Models;

namespace TranscriptFetch.Requests.Transcripts;

/// <summary>
/// The inputs of the FetchVideoTranscript operation.
/// </summary>
public sealed record FetchVideoTranscriptRequest
{
    /// <summary>
    /// Unique key (≤255 chars) to safely retry a request without being charged twice. Replays return the original response with <c>Idempotent-Replayed: true</c>. Reusing a key with a different body is a 409 conflict.
    /// </summary>
    [MaxLength(255)]
    public string? IdempotencyKey { get; init; }

    public required VideoRequest Body { get; init; }
}
