using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.Cards;

/// <summary>
/// The inputs of the UnfreezeCard operation.
/// </summary>
public sealed record UnfreezeCardRequest
{
    [MinLength(1)]
    public required string CardId { get; init; }

    public string? ApiToken { get; init; }
}
