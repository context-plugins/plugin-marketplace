namespace Paid.Requests.Customers;

/// <summary>
/// The inputs of the ListCustomerAliases operation.
/// </summary>
public sealed record ListCustomerAliasesRequest
{
    /// <summary>
    /// Paid customer display id
    /// </summary>
    public required string Id { get; init; }

    public int Limit { get; init; } = 10;

    public int? Offset { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
