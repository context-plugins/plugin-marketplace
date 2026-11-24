namespace Fellow.Requests.Recordings;

/// <summary>
/// The inputs of the AppsDeveloperApiApiGetUploadById operation.
/// </summary>
public sealed record AppsDeveloperApiApiGetUploadByIdRequest
{
    public required string RecordingId { get; init; }
}
