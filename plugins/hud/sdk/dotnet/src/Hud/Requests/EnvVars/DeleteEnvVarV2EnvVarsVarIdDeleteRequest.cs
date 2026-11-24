using System;

namespace Hud.Requests.EnvVars;

/// <summary>
/// The inputs of the DeleteEnvVarV2EnvVarsVarIdDelete operation.
/// </summary>
public sealed record DeleteEnvVarV2EnvVarsVarIdDeleteRequest
{
    public required Guid VarId { get; init; }
}
