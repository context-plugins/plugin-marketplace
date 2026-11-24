using Hightouch.Models;

namespace Hightouch.Requests.Events;

/// <summary>
/// The inputs of the UpdateContract operation.
/// </summary>
public sealed record UpdateContractRequest
{
    public required string ContractId { get; init; }

    public required EventContractUpdate Body { get; init; }
}
