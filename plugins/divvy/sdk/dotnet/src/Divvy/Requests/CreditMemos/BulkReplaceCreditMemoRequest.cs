using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.CreditMemos;

/// <summary>
/// The inputs of the BulkReplaceCreditMemo operation.
/// </summary>
public sealed record BulkReplaceCreditMemoRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    [MinLength(1)]
    [MaxLength(50)]
    public required IReadOnlyList<ReplaceCreditMemoWithIdRequestDto> Body { get; init; }
}
