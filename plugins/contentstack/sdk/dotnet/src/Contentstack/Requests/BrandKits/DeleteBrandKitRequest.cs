namespace Contentstack.Requests.BrandKits;

/// <summary>
/// The inputs of the DeleteBrandKit operation.
/// </summary>
public sealed record DeleteBrandKitRequest
{
    /// <summary>
    /// The unique identifier of the Brand Kit.
    /// </summary>
    public required string BrandKitUid { get; init; }

    /// <summary>
    /// The unique identifier of the organization.
    /// </summary>
    public required string OrganizationUid { get; init; }
}
