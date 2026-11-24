using Archbee.Models;

namespace Archbee.Requests.Documents;

/// <summary>
/// The inputs of the DeleteDocument operation.
/// </summary>
public sealed record DeleteDocumentRequest
{
    public required DocRequest Body { get; init; }
}
