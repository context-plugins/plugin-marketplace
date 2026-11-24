using System;

namespace Hud.Requests.QaAgents;

/// <summary>
/// The inputs of the GetQaAgentV2QaAgentsAgentIdGet operation.
/// </summary>
public sealed record GetQaAgentV2QaAgentsAgentIdGetRequest
{
    public required Guid AgentId { get; init; }
}
