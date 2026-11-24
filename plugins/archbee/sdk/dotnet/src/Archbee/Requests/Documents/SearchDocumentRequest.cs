using Archbee.Models;

namespace Archbee.Requests.Documents;

/// <summary>
/// The inputs of the SearchDocument operation.
/// </summary>
public sealed record SearchDocumentRequest
{
    public required DocsSearchRequest Body { get; init; }
}
