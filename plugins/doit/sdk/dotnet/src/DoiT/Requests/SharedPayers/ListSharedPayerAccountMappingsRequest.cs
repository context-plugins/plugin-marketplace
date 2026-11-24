namespace DoiT.Requests.SharedPayers;

/// <summary>
/// The inputs of the ListSharedPayerAccountMappings operation.
/// </summary>
public sealed record ListSharedPayerAccountMappingsRequest
{
    /// <summary>
    /// Customer ID. Must match the customer resolved from the bearer token - a token scoped to a different customer gets <c>403</c>.
    /// </summary>
    public required string CustomerId { get; init; }

    /// <summary>
    /// Restricts the results to accounts under this AWS management (payer) account ID.
    /// </summary>
    public string? ManagementAccount { get; init; }
}
