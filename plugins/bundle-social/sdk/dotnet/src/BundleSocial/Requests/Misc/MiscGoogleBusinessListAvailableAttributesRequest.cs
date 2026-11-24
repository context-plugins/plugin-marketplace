using System.ComponentModel.DataAnnotations;
using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessListAvailableAttributes operation.
/// </summary>
public sealed record MiscGoogleBusinessListAvailableAttributesRequest
{
    public required string TeamId { get; init; }

    public string? LanguageCode { get; init; }

    [RegularExpression("^[A-Za-z]{2}$")]
    public string? RegionCode { get; init; }

    [Minimum(1)]
    [Maximum(200)]
    public int? PageSize { get; init; }

    public string? PageToken { get; init; }
}
