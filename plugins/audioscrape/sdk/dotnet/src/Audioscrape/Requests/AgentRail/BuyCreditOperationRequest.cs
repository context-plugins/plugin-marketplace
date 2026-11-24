using Audioscrape.Models;

namespace Audioscrape.Requests.AgentRail;

/// <summary>
/// The inputs of the BuyCredit operation.
/// </summary>
public sealed record BuyCreditOperationRequest
{
    public required BuyCreditRequest Body { get; init; }
}
