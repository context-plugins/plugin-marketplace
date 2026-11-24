using Curlec.Core.Models;

namespace Curlec.Requests.Documents;

/// <summary>
/// The inputs of the UploadDocument operation.
/// </summary>
public sealed record UploadDocumentRequest
{
    /// <summary>
    /// File to upload. Supported: JPEG, PNG, PDF.
    /// </summary>
    public required BinaryContent File { get; init; }

    /// <summary>
    /// Reason for upload. Example: dispute_evidence.
    /// </summary>
    public required string Purpose { get; init; }
}
