using Deliverd.Models;

namespace Deliverd.Requests.Knowledge;

/// <summary>
/// The inputs of the PostApiV1KnowledgeImport operation.
/// </summary>
public sealed record PostApiV1KnowledgeImportRequest
{
    public ApiV1KnowledgeImportRequest? Body { get; init; }
}
