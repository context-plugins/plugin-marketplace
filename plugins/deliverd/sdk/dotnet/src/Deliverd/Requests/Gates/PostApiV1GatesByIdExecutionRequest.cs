using System;
using Deliverd.Models;

namespace Deliverd.Requests.Gates;

/// <summary>
/// The inputs of the PostApiV1GatesByIdExecution operation.
/// </summary>
public sealed record PostApiV1GatesByIdExecutionRequest
{
    /// <summary>
    /// The gate
    /// </summary>
    public required Guid Id { get; init; }

    public ApiV1GatesExecutionRequest? Body { get; init; }
}
