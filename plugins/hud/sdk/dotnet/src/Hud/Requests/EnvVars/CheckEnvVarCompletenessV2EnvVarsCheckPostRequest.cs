using Hud.Models;

namespace Hud.Requests.EnvVars;

/// <summary>
/// The inputs of the CheckEnvVarCompletenessV2EnvVarsCheckPost operation.
/// </summary>
public sealed record CheckEnvVarCompletenessV2EnvVarsCheckPostRequest
{
    public required RegistryEnvVarCheckRequest Body { get; init; }
}
