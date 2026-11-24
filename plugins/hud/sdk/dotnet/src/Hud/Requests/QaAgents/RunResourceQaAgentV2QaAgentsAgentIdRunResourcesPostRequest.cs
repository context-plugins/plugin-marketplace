using System;
using Hud.Models;

namespace Hud.Requests.QaAgents;

/// <summary>
/// The inputs of the RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPost operation.
/// </summary>
public sealed record RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostRequest
{
    public required Guid AgentId { get; init; }

    public required QaAgentResourceRunRequest Body { get; init; }
}
