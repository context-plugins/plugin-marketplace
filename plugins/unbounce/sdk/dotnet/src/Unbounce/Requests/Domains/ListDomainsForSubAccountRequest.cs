namespace Unbounce.Requests.Domains;

/// <summary>
/// The inputs of the ListDomainsForSubAccount operation.
/// </summary>
public sealed record ListDomainsForSubAccountRequest
{
    public required string SubAccountId { get; init; }
}
