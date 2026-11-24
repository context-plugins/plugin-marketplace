namespace Unbounce.Requests.Domains;

/// <summary>
/// The inputs of the GetDomain operation.
/// </summary>
public sealed record GetDomainRequest
{
    public required string DomainId { get; init; }
}
