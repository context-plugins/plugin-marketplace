using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.CreditMemos;

/// <summary>
/// The inputs of the BulkUpdateCreditMemo operation.
/// </summary>
public sealed record BulkUpdateCreditMemoRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    [MinLength(1)]
    [MaxLength(50)]
    public required IReadOnlyList<UpdateCreditMemoWithIdRequestDto> Body { get; init; }
}
