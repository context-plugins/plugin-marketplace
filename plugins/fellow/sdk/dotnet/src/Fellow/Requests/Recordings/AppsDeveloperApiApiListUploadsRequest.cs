using Fellow.Models;

namespace Fellow.Requests.Recordings;

/// <summary>
/// The inputs of the AppsDeveloperApiApiListUploads operation.
/// </summary>
public sealed record AppsDeveloperApiApiListUploadsRequest
{
    public required GetUploadsRequest Body { get; init; }
}
