namespace DidLogic.Requests.KycDocuments;

/// <summary>
/// The inputs of the DocumentsDestroy operation.
/// </summary>
public sealed record DocumentsDestroyRequest
{
    /// <summary>
    /// Document ID from documents_index, documents_create
    /// </summary>
    public required int Id { get; init; }
}
