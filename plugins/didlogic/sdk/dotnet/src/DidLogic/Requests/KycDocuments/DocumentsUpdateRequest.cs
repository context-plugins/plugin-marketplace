using DidLogic.Models;

namespace DidLogic.Requests.KycDocuments;

/// <summary>
/// The inputs of the DocumentsUpdate operation.
/// </summary>
public sealed record DocumentsUpdateRequest
{
    /// <summary>
    /// Document ID from documents_index, documents_create
    /// </summary>
    public required int Id { get; init; }

    public required ApiV2DocumentsRequest Body { get; init; }
}
