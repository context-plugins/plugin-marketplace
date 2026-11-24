using BrowserStack.Models;

namespace BrowserStack.Requests.Builds;

/// <summary>
/// The inputs of the UpdateBuild operation.
/// </summary>
public sealed record UpdateBuildRequest
{
    public required string BuildId { get; init; }

    public required AutomateBuildsJsonRequest Body { get; init; }
}
