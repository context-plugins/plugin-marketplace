using System;
using Deliverd.Models;

namespace Deliverd.Requests.Gates;

/// <summary>
/// The inputs of the PostApiV1GatesByIdCancel operation.
/// </summary>
public sealed record PostApiV1GatesByIdCancelRequest
{
    /// <summary>
    /// The gate
    /// </summary>
    public required Guid Id { get; init; }

    public ApiV1GatesCancelRequest? Body { get; init; }
}
