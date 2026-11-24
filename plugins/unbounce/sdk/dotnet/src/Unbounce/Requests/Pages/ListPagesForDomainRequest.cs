namespace Unbounce.Requests.Pages;

/// <summary>
/// The inputs of the ListPagesForDomain operation.
/// </summary>
public sealed record ListPagesForDomainRequest
{
    public required string DomainId { get; init; }
}
