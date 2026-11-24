namespace Unbounce.Requests.Pages;

/// <summary>
/// The inputs of the ListSubAccountPages operation.
/// </summary>
public sealed record ListSubAccountPagesRequest
{
    public required string SubAccountId { get; init; }
}
