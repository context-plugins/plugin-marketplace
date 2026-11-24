using BrowserUse.Models;

namespace BrowserUse.Requests.Runs;

/// <summary>
/// The inputs of the CreateRunRunsPost operation.
/// </summary>
public sealed record CreateRunRunsPostRequest
{
    public required RunCreateRequest Body { get; init; }
}
