using DidLogic.Models.Enums;

namespace DidLogic.Requests.KycDocuments;

/// <summary>
/// The inputs of the DocumentsFilesDownloadFile operation.
/// </summary>
public sealed record DocumentsFilesDownloadFileRequest
{
    /// <summary>
    /// Document ID from documents_index, documents_show, documents_create
    /// </summary>
    public required int Id { get; init; }

    /// <summary>
    /// File role, <c>files[].role</c> from documents_index, documents_show, documents_create
    /// </summary>
    public required Role Role { get; init; }
}
