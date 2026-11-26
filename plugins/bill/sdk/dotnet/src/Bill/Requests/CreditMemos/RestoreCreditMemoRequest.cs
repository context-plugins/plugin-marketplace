using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.CreditMemos;

/// <summary>
/// The inputs of the RestoreCreditMemo operation.
/// </summary>
public sealed record RestoreCreditMemoRequest
{
    [MinLength(1)]
    public required string CreditMemoId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
