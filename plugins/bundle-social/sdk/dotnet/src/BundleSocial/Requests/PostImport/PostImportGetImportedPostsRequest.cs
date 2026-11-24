using BundleSocial.Core.Validation.Attributes;
using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.PostImport;

/// <summary>
/// The inputs of the PostImportGetImportedPosts operation.
/// </summary>
public sealed record PostImportGetImportedPostsRequest
{
    public required string TeamId { get; init; }

    public required SocialAccountTypeBundleSocialPostImportApi SocialAccountType { get; init; }

    [Minimum(1.0)]
    [Maximum(100.0)]
    public double Limit { get; init; } = 50d;

    [Minimum(0.0)]
    public double? Offset { get; init; } = 0d;
}
