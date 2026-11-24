using Hightouch.Models;

namespace Hightouch.Requests.Events;

/// <summary>
/// The inputs of the CreateContract operation.
/// </summary>
public sealed record CreateContractRequest
{
    public required EventContractCreate Body { get; init; }
}
