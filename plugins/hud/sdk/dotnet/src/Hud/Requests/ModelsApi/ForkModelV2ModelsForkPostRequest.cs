using Hud.Models;

namespace Hud.Requests.ModelsApi;

/// <summary>
/// The inputs of the ForkModelV2ModelsForkPost operation.
/// </summary>
public sealed record ForkModelV2ModelsForkPostRequest
{
    public required ModelForkRequest Body { get; init; }
}
