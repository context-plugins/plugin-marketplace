using System;

namespace JuriSign.Requests.Documents;

/// <summary>
/// The inputs of the DeleteDocument operation.
/// </summary>
public sealed record DeleteDocumentRequest
{
    /// <summary>
    /// Resource UUID
    /// </summary>
    public required Guid Id { get; init; }
}
