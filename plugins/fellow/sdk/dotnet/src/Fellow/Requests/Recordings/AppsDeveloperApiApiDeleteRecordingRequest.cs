namespace Fellow.Requests.Recordings;

/// <summary>
/// The inputs of the AppsDeveloperApiApiDeleteRecording operation.
/// </summary>
public sealed record AppsDeveloperApiApiDeleteRecordingRequest
{
    public required string RecordingId { get; init; }
}
