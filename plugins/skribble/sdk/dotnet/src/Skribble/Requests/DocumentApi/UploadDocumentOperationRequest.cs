using Skribble.Models;

namespace Skribble.Requests.DocumentApi;

/// <summary>
/// The inputs of the UploadDocument operation.
/// </summary>
public sealed record UploadDocumentOperationRequest
{
    /// <summary>
    /// Request body to create a Document object
    /// </summary>
    public required UploadDocumentRequest Body { get; init; }
}
