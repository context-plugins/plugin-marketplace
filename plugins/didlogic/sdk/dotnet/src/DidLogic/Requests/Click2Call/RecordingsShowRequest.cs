namespace DidLogic.Requests.Click2Call;

/// <summary>
/// The inputs of the RecordingsShow operation.
/// </summary>
public sealed record RecordingsShowRequest
{
    /// <summary>
    /// User ID in the permanent <c>recording_url</c> from click2call_create, click2call_show
    /// </summary>
    public required int UserId { get; init; }

    /// <summary>
    /// Encrypted recording token in the permanent <c>recording_url</c> from click2call_create, click2call_show
    /// </summary>
    public required string Token { get; init; }
}
