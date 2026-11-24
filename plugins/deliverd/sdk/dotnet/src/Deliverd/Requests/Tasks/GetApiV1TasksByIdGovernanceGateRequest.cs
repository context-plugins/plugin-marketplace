using System;
using Deliverd.Models.Enums;

namespace Deliverd.Requests.Tasks;

/// <summary>
/// The inputs of the GetApiV1TasksByIdGovernanceGate operation.
/// </summary>
public sealed record GetApiV1TasksByIdGovernanceGateRequest
{
    public required Guid Id { get; init; }

    public ActionDeliverdDevGovernanceApi? Action { get; init; }
}
