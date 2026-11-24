namespace Hightouch.Requests.Events;

/// <summary>
/// The inputs of the GetDomain operation.
/// </summary>
public sealed record GetDomainRequest
{
    /// <summary>
    /// The id of the domain
    /// </summary>
    public required string DomainId { get; init; }
}
