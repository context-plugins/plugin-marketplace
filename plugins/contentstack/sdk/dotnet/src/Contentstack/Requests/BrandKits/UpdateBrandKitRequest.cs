using Contentstack.Models;

namespace Contentstack.Requests.BrandKits;

/// <summary>
/// The inputs of the UpdateBrandKit operation.
/// </summary>
public sealed record UpdateBrandKitRequest
{
    /// <summary>
    /// The unique identifier of the Brand Kit.
    /// </summary>
    public required string BrandKitUid { get; init; }

    /// <summary>
    /// The unique identifier of the organization.
    /// </summary>
    public required string OrganizationUid { get; init; }

    public required CreateBrandKitRequest Body { get; init; }
}
