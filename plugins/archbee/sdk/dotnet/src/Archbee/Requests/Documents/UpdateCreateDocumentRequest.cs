using Archbee.Models;

namespace Archbee.Requests.Documents;

/// <summary>
/// The inputs of the UpdateCreateDocument operation.
/// </summary>
public sealed record UpdateCreateDocumentRequest
{
    public required DocRequest1 Body { get; init; }
}
