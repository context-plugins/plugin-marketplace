using System;
using Deliverd.Models.Enums;

namespace Deliverd.Requests.GovernanceApi;

/// <summary>
/// The inputs of the GetApiV1GovernanceIncidents operation.
/// </summary>
public sealed record GetApiV1GovernanceIncidentsRequest
{
    public StatusDeliverdDevGovernanceApi? Status { get; init; }

    public Guid? AiSystemId { get; init; }

    public int? Limit { get; init; }

    public string? Cursor { get; init; }
}
