using System;

namespace Deliverd.Requests.Gates;

/// <summary>
/// The inputs of the GetApiV1GatesById operation.
/// </summary>
public sealed record GetApiV1GatesByIdRequest
{
    /// <summary>
    /// The gate decision
    /// </summary>
    public required Guid Id { get; init; }
}
