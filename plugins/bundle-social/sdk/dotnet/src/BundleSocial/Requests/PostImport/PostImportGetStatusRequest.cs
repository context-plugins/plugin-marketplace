using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.PostImport;

/// <summary>
/// The inputs of the PostImportGetStatus operation.
/// </summary>
public sealed record PostImportGetStatusRequest
{
    public required string TeamId { get; init; }

    public SocialAccountTypeBundleSocialPostImportApi? SocialAccountType { get; init; }
}
