using System.ComponentModel.DataAnnotations;
using Bill.Models.Enums;

namespace Bill.Requests.Cards;

/// <summary>
/// The inputs of the DeleteCard operation.
/// </summary>
public sealed record DeleteCardRequest
{
    [MinLength(1)]
    public required string CardId { get; init; }

    public UserDeletedReasonType? Reason { get; init; }

    public string? ApiToken { get; init; }
}
