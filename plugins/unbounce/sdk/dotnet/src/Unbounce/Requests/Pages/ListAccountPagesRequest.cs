namespace Unbounce.Requests.Pages;

/// <summary>
/// The inputs of the ListAccountPages operation.
/// </summary>
public sealed record ListAccountPagesRequest
{
    public required string AccountId { get; init; }
}
