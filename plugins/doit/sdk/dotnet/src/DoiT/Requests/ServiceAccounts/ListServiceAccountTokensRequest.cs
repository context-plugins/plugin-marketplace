using System.ComponentModel.DataAnnotations;

namespace DoiT.Requests.ServiceAccounts;

/// <summary>
/// The inputs of the ListServiceAccountTokens operation.
/// </summary>
public sealed record ListServiceAccountTokensRequest
{
    /// <summary>
    /// ID of the service account that owns the token, as returned in the id field by the service account list and create operations.
    /// </summary>
    [MinLength(1)]
    public required string ServiceAccountId { get; init; }
}
