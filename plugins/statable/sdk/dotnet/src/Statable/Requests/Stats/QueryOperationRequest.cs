using Statable.Models;

namespace Statable.Requests.Stats;

/// <summary>
/// The inputs of the Query operation.
/// </summary>
public sealed record QueryOperationRequest
{
    public required QueryRequest Body { get; init; }
}
