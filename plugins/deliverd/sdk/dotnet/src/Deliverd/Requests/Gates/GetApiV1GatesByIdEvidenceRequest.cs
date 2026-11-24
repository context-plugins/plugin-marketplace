using System;
using Deliverd.Models.Enums;

namespace Deliverd.Requests.Gates;

/// <summary>
/// The inputs of the GetApiV1GatesByIdEvidence operation.
/// </summary>
public sealed record GetApiV1GatesByIdEvidenceRequest
{
    /// <summary>
    /// The gate
    /// </summary>
    public required Guid Id { get; init; }

    public Format? Format { get; init; }
}
