using DoiT.Models;

namespace DoiT.Requests.SharedPayers;

/// <summary>
/// The inputs of the ReassignSharedPayerAccount operation.
/// </summary>
public sealed record ReassignSharedPayerAccountRequest
{
    /// <summary>
    /// Customer ID. Must match the customer resolved from the bearer token - a token scoped to a different customer gets <c>403</c>.
    /// </summary>
    public required string CustomerId { get; init; }

    /// <summary>
    /// Asset ID of the AWS account to reassign, as returned by <c>listSharedPayerAccountMappings</c>.
    /// </summary>
    public required string AssetId { get; init; }

    public required SharedPayerAccountReassignRequest Body { get; init; }
}
