using Hud.Models;

namespace Hud.Requests.Builds;

/// <summary>
/// The inputs of the RegisterBuildSourceV2BuildsRegisterPost operation.
/// </summary>
public sealed record RegisterBuildSourceV2BuildsRegisterPostRequest
{
    public required BuildRegisterRequest Body { get; init; }
}
