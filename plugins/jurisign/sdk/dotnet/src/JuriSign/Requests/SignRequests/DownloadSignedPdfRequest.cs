using System;

namespace JuriSign.Requests.SignRequests;

/// <summary>
/// The inputs of the DownloadSignedPdf operation.
/// </summary>
public sealed record DownloadSignedPdfRequest
{
    /// <summary>
    /// Resource UUID
    /// </summary>
    public required Guid Id { get; init; }
}
