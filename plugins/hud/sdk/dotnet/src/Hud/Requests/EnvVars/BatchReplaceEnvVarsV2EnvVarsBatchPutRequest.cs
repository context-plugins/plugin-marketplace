using Hud.Models;

namespace Hud.Requests.EnvVars;

/// <summary>
/// The inputs of the BatchReplaceEnvVarsV2EnvVarsBatchPut operation.
/// </summary>
public sealed record BatchReplaceEnvVarsV2EnvVarsBatchPutRequest
{
    public required RegistryEnvVarBatchRequest Body { get; init; }
}
