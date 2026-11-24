using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscFacebookGetRecommendations operation.
/// </summary>
public sealed record MiscFacebookGetRecommendationsRequest
{
    public required string TeamId { get; init; }

    [Minimum(1.0)]
    [Maximum(100.0)]
    public double Limit { get; init; } = 50d;

    [Minimum(0.0)]
    public double? Offset { get; init; } = 0d;
}
