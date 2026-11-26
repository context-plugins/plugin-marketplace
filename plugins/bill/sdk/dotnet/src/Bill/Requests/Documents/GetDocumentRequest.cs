using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Documents;

/// <summary>
/// The inputs of the GetDocument operation.
/// </summary>
public sealed record GetDocumentRequest
{
    [MinLength(1)]
    public required string DocumentId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
