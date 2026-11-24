using System;
using Deliverd.Models;

namespace Deliverd.Requests.Tasks;

/// <summary>
/// The inputs of the PostApiV1TasksByIdFindingsByFindingIdKnowledge operation.
/// </summary>
public sealed record PostApiV1TasksByIdFindingsByFindingIdKnowledgeRequest
{
    public required Guid Id { get; init; }

    public required Guid FindingId { get; init; }

    public ApiV1TasksFindingsKnowledgeRequest? Body { get; init; }
}
