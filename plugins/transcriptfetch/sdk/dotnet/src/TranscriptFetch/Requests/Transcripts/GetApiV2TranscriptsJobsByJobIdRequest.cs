namespace TranscriptFetch.Requests.Transcripts;

/// <summary>
/// The inputs of the GetApiV2TranscriptsJobsByJobId operation.
/// </summary>
public sealed record GetApiV2TranscriptsJobsByJobIdRequest
{
    public required string JobId { get; init; }
}
