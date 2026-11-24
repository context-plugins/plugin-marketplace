using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.Documents;

/// <summary>
/// The inputs of the CreateBillDocument operation.
/// </summary>
public sealed record CreateBillDocumentRequest
{
    [MinLength(1)]
    public required string BillId { get; init; }

    [MinLength(1)]
    public required string Name { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required IReadOnlyList<string> Body { get; init; }
}
