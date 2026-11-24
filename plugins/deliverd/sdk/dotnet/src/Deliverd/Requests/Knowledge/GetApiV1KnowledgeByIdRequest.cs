using System;

namespace Deliverd.Requests.Knowledge;

/// <summary>
/// The inputs of the GetApiV1KnowledgeById operation.
/// </summary>
public sealed record GetApiV1KnowledgeByIdRequest
{
    public required Guid Id { get; init; }
}
