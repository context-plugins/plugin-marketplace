using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Cards;

/// <summary>
/// The inputs of the GetCard operation.
/// </summary>
public sealed record GetCardRequest
{
    [MinLength(1)]
    public required string CardId { get; init; }

    public string? ApiToken { get; init; }
}
