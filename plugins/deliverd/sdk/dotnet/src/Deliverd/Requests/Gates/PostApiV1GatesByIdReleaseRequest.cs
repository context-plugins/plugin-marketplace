using System;
using Deliverd.Models;

namespace Deliverd.Requests.Gates;

/// <summary>
/// The inputs of the PostApiV1GatesByIdRelease operation.
/// </summary>
public sealed record PostApiV1GatesByIdReleaseRequest
{
    /// <summary>
    /// The gate
    /// </summary>
    public required Guid Id { get; init; }

    public ApiV1GatesReleaseRequest? Body { get; init; }
}
