using DidLogic.Core.Validation.Attributes;

namespace DidLogic.Requests.Purchases;

/// <summary>
/// The inputs of the PurchasesIndex operation.
/// </summary>
public sealed record PurchasesIndexRequest
{
    /// <summary>
    /// Page number for pagination (starts from 1)
    /// </summary>
    [Minimum(1)]
    public int Page { get; init; } = 1;

    /// <summary>
    /// Number of items per page
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int PerPage { get; init; } = 20;
}
