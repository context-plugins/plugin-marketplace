namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscYoutubeGetVideoCategories operation.
/// </summary>
public sealed record MiscYoutubeGetVideoCategoriesRequest
{
    public required string TeamId { get; init; }

    /// <summary>
    /// ISO 3166-1 alpha-2 country code (e.g., 'US', 'GB', 'PL'). Defaults to 'US'
    /// </summary>
    public string? RegionCode { get; init; }
}
