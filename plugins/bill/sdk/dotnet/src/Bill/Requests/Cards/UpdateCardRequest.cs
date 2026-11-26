using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.Cards;

/// <summary>
/// The inputs of the UpdateCard operation.
/// </summary>
public sealed record UpdateCardRequest
{
    [MinLength(1)]
    public required string CardId { get; init; }

    public string? ApiToken { get; init; }

    public required UpdateCardRequestDto Body { get; init; }
}
