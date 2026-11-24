using System;

namespace JuriSign.Requests.Documents;

/// <summary>
/// The inputs of the DownloadDocument operation.
/// </summary>
public sealed record DownloadDocumentRequest
{
    /// <summary>
    /// Resource UUID
    /// </summary>
    public required Guid Id { get; init; }
}
