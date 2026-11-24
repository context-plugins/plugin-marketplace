using Hud.Models;

namespace Hud.Requests.Qa;

/// <summary>
/// The inputs of the RunQaChecksV2QaRunsPost operation.
/// </summary>
public sealed record RunQaChecksV2QaRunsPostRequest
{
    public required QaRunCreateRequest Body { get; init; }
}
