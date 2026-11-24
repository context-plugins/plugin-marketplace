using System;
using Deliverd.Models.Enums;

namespace Deliverd.Requests.Flows;

/// <summary>
/// The inputs of the GetApiV1FlowsByIdEvidence operation.
/// </summary>
public sealed record GetApiV1FlowsByIdEvidenceRequest
{
    public required Guid Id { get; init; }

    public Format? Format { get; init; }
}
