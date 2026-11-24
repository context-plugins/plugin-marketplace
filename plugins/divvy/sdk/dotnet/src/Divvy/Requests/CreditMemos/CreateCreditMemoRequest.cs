using Divvy.Models;

namespace Divvy.Requests.CreditMemos;

/// <summary>
/// The inputs of the CreateCreditMemo operation.
/// </summary>
public sealed record CreateCreditMemoRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required CreateCreditMemoRequestDto Body { get; init; }
}
