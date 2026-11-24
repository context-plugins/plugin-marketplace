namespace DidLogic.Requests.KycDocuments;

/// <summary>
/// The inputs of the DocumentsShow operation.
/// </summary>
public sealed record DocumentsShowRequest
{
    /// <summary>
    /// Document ID from documents_index, documents_create
    /// </summary>
    public required int Id { get; init; }
}
