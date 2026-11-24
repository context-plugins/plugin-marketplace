using Fellow.Models;

namespace Fellow.Requests.Recordings;

/// <summary>
/// The inputs of the AppsDeveloperApiApiGetRecordings operation.
/// </summary>
public sealed record AppsDeveloperApiApiGetRecordingsRequest
{
    public required GetRecordingsRequest Body { get; init; }
}
