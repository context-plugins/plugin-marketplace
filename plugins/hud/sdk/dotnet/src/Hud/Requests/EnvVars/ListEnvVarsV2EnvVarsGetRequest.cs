using System;

namespace Hud.Requests.EnvVars;

/// <summary>
/// The inputs of the ListEnvVarsV2EnvVarsGet operation.
/// </summary>
public sealed record ListEnvVarsV2EnvVarsGetRequest
{
    /// <summary>
    /// Registry to list env vars for.
    /// </summary>
    public required Guid RegistryId { get; init; }
}
