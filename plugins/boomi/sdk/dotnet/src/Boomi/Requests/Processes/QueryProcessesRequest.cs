using Boomi.Models;

namespace Boomi.Requests.Processes;

/// <summary>
/// The inputs of the QueryProcesses operation.
/// </summary>
public sealed record QueryProcessesRequest
{
    public required QueryRequest Body { get; init; }
}
