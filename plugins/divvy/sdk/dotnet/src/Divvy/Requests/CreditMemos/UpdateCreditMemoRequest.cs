using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.CreditMemos;

/// <summary>
/// The inputs of the UpdateCreditMemo operation.
/// </summary>
public sealed record UpdateCreditMemoRequest
{
    [MinLength(1)]
    public required string CreditMemoId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required UpdateCreditMemoRequestDto Body { get; init; }
}
