using System;

namespace JuriSign.Requests.SignRequests;

/// <summary>
/// The inputs of the DownloadProof operation.
/// </summary>
public sealed record DownloadProofRequest
{
    /// <summary>
    /// Resource UUID
    /// </summary>
    public required Guid Id { get; init; }
}
