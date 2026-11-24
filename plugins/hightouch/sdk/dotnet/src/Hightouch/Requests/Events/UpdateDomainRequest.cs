using Hightouch.Models;

namespace Hightouch.Requests.Events;

/// <summary>
/// The inputs of the UpdateDomain operation.
/// </summary>
public sealed record UpdateDomainRequest
{
    /// <summary>
    /// The domain's id
    /// </summary>
    public required string DomainId { get; init; }

    public required EventDomainUpdate Body { get; init; }
}
