using Statable.Models;

namespace Statable.Requests.Sites;

/// <summary>
/// The inputs of the SetHostnameSettings operation.
/// </summary>
public sealed record SetHostnameSettingsRequest
{
    public required long Id { get; init; }

    public required HostnameListRequest Body { get; init; }
}
