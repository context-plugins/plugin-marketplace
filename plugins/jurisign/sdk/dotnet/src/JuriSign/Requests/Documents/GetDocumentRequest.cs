using System;

namespace JuriSign.Requests.Documents;

/// <summary>
/// The inputs of the GetDocument operation.
/// </summary>
public sealed record GetDocumentRequest
{
    /// <summary>
    /// Resource UUID
    /// </summary>
    public required Guid Id { get; init; }
}
