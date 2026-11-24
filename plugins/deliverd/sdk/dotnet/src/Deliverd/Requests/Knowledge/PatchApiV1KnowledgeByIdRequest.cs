using System;
using Deliverd.Models;

namespace Deliverd.Requests.Knowledge;

/// <summary>
/// The inputs of the PatchApiV1KnowledgeById operation.
/// </summary>
public sealed record PatchApiV1KnowledgeByIdRequest
{
    public required Guid Id { get; init; }

    public ApiV1KnowledgeRequest1? Body { get; init; }
}
