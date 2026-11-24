using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.SocialAccountApi;

/// <summary>
/// The inputs of the SocialAccountGetByType operation.
/// </summary>
public sealed record SocialAccountGetByTypeRequest
{
    public required TypeEnum Type { get; init; }

    public required string TeamId { get; init; }
}
