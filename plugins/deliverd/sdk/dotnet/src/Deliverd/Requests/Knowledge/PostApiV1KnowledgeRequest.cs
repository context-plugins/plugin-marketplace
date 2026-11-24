using Deliverd.Models;

namespace Deliverd.Requests.Knowledge;

/// <summary>
/// The inputs of the PostApiV1Knowledge operation.
/// </summary>
public sealed record PostApiV1KnowledgeRequest
{
    public ApiV1KnowledgeRequest? Body { get; init; }
}
