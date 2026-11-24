using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessListMedia operation.
/// </summary>
public sealed record MiscGoogleBusinessListMediaRequest
{
    public required string TeamId { get; init; }

    [Minimum(1)]
    [Maximum(250)]
    public int? PageSize { get; init; }

    public string? PageToken { get; init; }
}
