using System;
using Hud.Models;

namespace Hud.Requests.EnvVars;

/// <summary>
/// The inputs of the UpdateEnvVarV2EnvVarsVarIdPatch operation.
/// </summary>
public sealed record UpdateEnvVarV2EnvVarsVarIdPatchRequest
{
    public required Guid VarId { get; init; }

    public required RegistryEnvVarUpdateRequest Body { get; init; }
}
