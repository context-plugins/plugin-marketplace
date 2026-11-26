using System.ComponentModel.DataAnnotations;
using Bill.Core.Validation.Attributes;

namespace Bill.Requests.Documents;

/// <summary>
/// The inputs of the ListDocuments operation.
/// </summary>
public sealed record ListDocumentsRequest
{
    [MinLength(1)]
    public required string BillId { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public int? Max { get; init; }

    public string? Page { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
