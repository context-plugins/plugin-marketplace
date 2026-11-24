using System.ComponentModel.DataAnnotations;

namespace DoiT.Requests.ServiceAccounts;

/// <summary>
/// The inputs of the GetServiceAccountToken operation.
/// </summary>
public sealed record GetServiceAccountTokenRequest
{
    /// <summary>
    /// ID of the service account that owns the token, as returned in the id field by the service account list and create operations.
    /// </summary>
    [MinLength(1)]
    public required string ServiceAccountId { get; init; }

    /// <summary>
    /// API token ID, as returned in the id field by the token list and create operations.
    /// </summary>
    [MinLength(1)]
    public required string Id { get; init; }
}
