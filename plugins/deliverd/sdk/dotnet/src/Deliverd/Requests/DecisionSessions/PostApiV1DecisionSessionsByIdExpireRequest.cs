using System;

namespace Deliverd.Requests.DecisionSessions;

/// <summary>
/// The inputs of the PostApiV1DecisionSessionsByIdExpire operation.
/// </summary>
public sealed record PostApiV1DecisionSessionsByIdExpireRequest
{
    public required Guid Id { get; init; }
}
