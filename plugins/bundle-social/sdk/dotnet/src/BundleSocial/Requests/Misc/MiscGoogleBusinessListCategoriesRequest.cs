using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using BundleSocial.Core.Validation.Attributes;
using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessListCategories operation.
/// </summary>
public sealed record MiscGoogleBusinessListCategoriesRequest
{
    public required string TeamId { get; init; }

    [StringLength(2, MinimumLength = 2)]
    public required string RegionCode { get; init; }

    public required string LanguageCode { get; init; }

    [MinLength(1)]
    [MaxLength(100)]
    public IReadOnlyList<string>? Names { get; init; }

    public string? Filter { get; init; }

    [Minimum(50)]
    [Maximum(50)]
    public int PageSize { get; init; } = 50;

    public string? PageToken { get; init; }

    public View View { get; init; } = View.Basic;
}
