using System;

namespace Deliverd.Requests.Agents;

/// <summary>
/// The inputs of the GetApiV1AgentsById operation.
/// </summary>
public sealed record GetApiV1AgentsByIdRequest
{
    public required Guid Id { get; init; }
}
