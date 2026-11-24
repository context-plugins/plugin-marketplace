using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.PostApi;

/// <summary>
/// The inputs of the PostGetReconnectSocialAccountCandidates operation.
/// </summary>
public sealed record PostGetReconnectSocialAccountCandidatesRequest
{
    public required string TeamId { get; init; }

    public required TypeEnum Type { get; init; }

    public double? Offset { get; init; } = 0d;

    public double? Limit { get; init; } = 10d;
}
