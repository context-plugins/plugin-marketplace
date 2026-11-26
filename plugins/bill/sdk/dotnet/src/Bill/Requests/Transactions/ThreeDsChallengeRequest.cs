using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.Transactions;

/// <summary>
/// The inputs of the ThreeDsChallenge operation.
/// </summary>
public sealed record ThreeDsChallengeRequest
{
    [MinLength(1)]
    public required string AcsTransactionId { get; init; }

    public string? ApiToken { get; init; }

    public required ThreeDsRequestDto Body { get; init; }
}
