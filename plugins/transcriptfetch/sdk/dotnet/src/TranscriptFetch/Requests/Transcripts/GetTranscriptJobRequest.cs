namespace TranscriptFetch.Requests.Transcripts;

/// <summary>
/// The inputs of the GetTranscriptJob operation.
/// </summary>
public sealed record GetTranscriptJobRequest
{
    public required string JobId { get; init; }
}
