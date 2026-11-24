using Hightouch.Models;

namespace Hightouch.Requests.Events;

/// <summary>
/// The inputs of the CreateDomain operation.
/// </summary>
public sealed record CreateDomainRequest
{
    public required EventDomainCreate Body { get; init; }
}
