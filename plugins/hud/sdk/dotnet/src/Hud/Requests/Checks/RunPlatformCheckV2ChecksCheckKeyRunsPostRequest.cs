using Hud.Models;

namespace Hud.Requests.Checks;

/// <summary>
/// The inputs of the RunPlatformCheckV2ChecksCheckKeyRunsPost operation.
/// </summary>
public sealed record RunPlatformCheckV2ChecksCheckKeyRunsPostRequest
{
    public required string CheckKey { get; init; }

    public required CheckRunRequest Body { get; init; }
}
