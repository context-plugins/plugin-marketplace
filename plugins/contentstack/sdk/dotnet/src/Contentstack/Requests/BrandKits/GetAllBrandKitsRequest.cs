using Contentstack.Core.Validation.Attributes;

namespace Contentstack.Requests.BrandKits;

/// <summary>
/// The inputs of the GetAllBrandKits operation.
/// </summary>
public sealed record GetAllBrandKitsRequest
{
    /// <summary>
    /// Number of records to skip for pagination.
    /// </summary>
    [Minimum(0)]
    public int Skip { get; init; } = 0;

    /// <summary>
    /// Maximum number of records to return.
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 25;

    /// <summary>
    /// The unique identifier of the organization.
    /// </summary>
    public required string OrganizationUid { get; init; }
}
