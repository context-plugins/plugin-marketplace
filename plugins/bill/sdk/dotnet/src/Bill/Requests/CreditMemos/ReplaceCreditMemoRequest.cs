using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.CreditMemos;

/// <summary>
/// The inputs of the ReplaceCreditMemo operation.
/// </summary>
public sealed record ReplaceCreditMemoRequest
{
    [MinLength(1)]
    public required string CreditMemoId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required ReplaceCreditMemoRequestDto Body { get; init; }
}
