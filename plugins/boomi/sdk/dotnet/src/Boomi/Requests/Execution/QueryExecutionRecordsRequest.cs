using Boomi.Models;

namespace Boomi.Requests.Execution;

/// <summary>
/// The inputs of the QueryExecutionRecords operation.
/// </summary>
public sealed record QueryExecutionRecordsRequest
{
    public required QueryRequest Body { get; init; }
}
