using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessListPlaceActionLinks operation.
/// </summary>
public sealed record MiscGoogleBusinessListPlaceActionLinksRequest
{
    public required string TeamId { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public int? PageSize { get; init; }

    public string? PageToken { get; init; }
}
