namespace Fellow.Requests.Recordings;

/// <summary>
/// The inputs of the AppsDeveloperApiApiGetRecordingById operation.
/// </summary>
public sealed record AppsDeveloperApiApiGetRecordingByIdRequest
{
    public required string RecordingId { get; init; }
}
