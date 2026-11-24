using Contentstack.Models;

namespace Contentstack.Requests.BrandKits;

/// <summary>
/// The inputs of the CreateBrandKit operation.
/// </summary>
public sealed record CreateBrandKitOperationRequest
{
    /// <summary>
    /// The unique identifier of the organization.
    /// </summary>
    public required string OrganizationUid { get; init; }

    public required CreateBrandKitRequest Body { get; init; }
}
