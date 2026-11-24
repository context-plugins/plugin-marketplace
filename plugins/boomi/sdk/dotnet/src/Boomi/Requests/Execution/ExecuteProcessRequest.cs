using Boomi.Models;

namespace Boomi.Requests.Execution;

/// <summary>
/// The inputs of the ExecuteProcess operation.
/// </summary>
public sealed record ExecuteProcessRequest
{
    public required ExecutionRequest Body { get; init; }
}
