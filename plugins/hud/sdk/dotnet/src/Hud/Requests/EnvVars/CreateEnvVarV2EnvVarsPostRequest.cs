using Hud.Models;

namespace Hud.Requests.EnvVars;

/// <summary>
/// The inputs of the CreateEnvVarV2EnvVarsPost operation.
/// </summary>
public sealed record CreateEnvVarV2EnvVarsPostRequest
{
    public required RegistryEnvVarCreateRequest Body { get; init; }
}
