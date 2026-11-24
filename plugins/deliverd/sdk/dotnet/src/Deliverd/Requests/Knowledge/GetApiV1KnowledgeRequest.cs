using System;
using Deliverd.Models.Enums;

namespace Deliverd.Requests.Knowledge;

/// <summary>
/// The inputs of the GetApiV1Knowledge operation.
/// </summary>
public sealed record GetApiV1KnowledgeRequest
{
    public string? Q { get; init; }

    public KindDeliverdDevKnowledgeApi? Kind { get; init; }

    public StatusDeliverdDevKnowledgeApi? Status { get; init; }

    public Guid? WorkspaceId { get; init; }

    public Guid? FlowId { get; init; }

    public int? Limit { get; init; }
}
