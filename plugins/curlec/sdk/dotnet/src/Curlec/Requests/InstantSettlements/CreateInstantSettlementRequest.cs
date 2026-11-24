using Curlec.Models;

namespace Curlec.Requests.InstantSettlements;

/// <summary>
/// The inputs of the CreateInstantSettlement operation.
/// </summary>
public sealed record CreateInstantSettlementRequest
{
    public required SettlementsOndemandRequest Body { get; init; }
}
