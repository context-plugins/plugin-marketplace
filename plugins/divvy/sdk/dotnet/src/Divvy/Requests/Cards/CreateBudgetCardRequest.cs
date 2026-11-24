using Divvy.Models;

namespace Divvy.Requests.Cards;

/// <summary>
/// The inputs of the CreateBudgetCard operation.
/// </summary>
public sealed record CreateBudgetCardRequest
{
    public string? ApiToken { get; init; }

    public required CreateCardRequestDto Body { get; init; }
}
