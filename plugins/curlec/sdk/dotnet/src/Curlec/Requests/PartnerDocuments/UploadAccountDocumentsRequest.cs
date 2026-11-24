using Curlec.Core.Models;
using Curlec.Models.Enums;

namespace Curlec.Requests.PartnerDocuments;

/// <summary>
/// The inputs of the UploadAccountDocuments operation.
/// </summary>
public sealed record UploadAccountDocumentsRequest
{
    /// <summary>
    /// Unique identifier of the linked merchant account (e.g. <c>acc_00000000000001</c>).
    /// </summary>
    public required string AccountId { get; init; }

    public DocumentType? DocumentType { get; init; }

    public BinaryContent? File { get; init; }
}
