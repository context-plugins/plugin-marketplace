namespace DoiT.Requests.SharedPayers;

/// <summary>
/// The inputs of the ListSharedPayers operation.
/// </summary>
public sealed record ListSharedPayersRequest
{
    /// <summary>
    /// Customer ID. Must match the customer resolved from the bearer token - a token scoped to a different customer gets <c>403</c>.
    /// </summary>
    public required string CustomerId { get; init; }
}
