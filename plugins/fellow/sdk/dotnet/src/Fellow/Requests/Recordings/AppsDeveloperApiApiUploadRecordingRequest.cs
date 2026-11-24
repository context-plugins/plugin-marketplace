using Fellow.Models;

namespace Fellow.Requests.Recordings;

/// <summary>
/// The inputs of the AppsDeveloperApiApiUploadRecording operation.
/// </summary>
public sealed record AppsDeveloperApiApiUploadRecordingRequest
{
    public required RecordingUploadRequest Body { get; init; }
}
