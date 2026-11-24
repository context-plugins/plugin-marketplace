using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.CreditMemos;

/// <summary>
/// The inputs of the ArchiveCreditMemo operation.
/// </summary>
public sealed record ArchiveCreditMemoRequest
{
    [MinLength(1)]
    public required string CreditMemoId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
