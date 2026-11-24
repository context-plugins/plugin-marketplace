using System;

namespace Deliverd.Requests.DecisionSessions;

/// <summary>
/// The inputs of the GetApiV1DecisionSessionsById operation.
/// </summary>
public sealed record GetApiV1DecisionSessionsByIdRequest
{
    public required Guid Id { get; init; }
}
