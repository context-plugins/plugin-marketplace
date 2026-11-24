using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.Cards;

/// <summary>
/// The inputs of the GetPanJwt operation.
/// </summary>
public sealed record GetPanJwtRequest
{
    [MinLength(1)]
    public required string CardId { get; init; }

    public string? ApiToken { get; init; }
}
