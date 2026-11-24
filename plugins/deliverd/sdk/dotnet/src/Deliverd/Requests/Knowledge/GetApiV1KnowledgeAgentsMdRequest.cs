using System;

namespace Deliverd.Requests.Knowledge;

/// <summary>
/// The inputs of the GetApiV1KnowledgeAgentsMd operation.
/// </summary>
public sealed record GetApiV1KnowledgeAgentsMdRequest
{
    public Guid? WorkspaceId { get; init; }
}
