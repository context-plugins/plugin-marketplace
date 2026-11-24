namespace DidLogic.Requests.Calls;

/// <summary>
/// The inputs of the CallsRecording operation.
/// </summary>
public sealed record CallsRecordingRequest
{
    /// <summary>
    /// Call ID of the recording (required). Inbound callids are the encrypted webhook value.
    /// </summary>
    public required string Callid { get; init; }
}
