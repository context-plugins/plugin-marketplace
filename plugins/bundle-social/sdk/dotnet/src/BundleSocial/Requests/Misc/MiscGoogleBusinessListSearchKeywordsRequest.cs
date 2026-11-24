using System.ComponentModel.DataAnnotations;
using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessListSearchKeywords operation.
/// </summary>
public sealed record MiscGoogleBusinessListSearchKeywordsRequest
{
    public required string TeamId { get; init; }

    /// <summary>
    /// Month in <c>YYYY-MM</c> format, inclusive.
    /// </summary>
    [RegularExpression("^\\d{4}-(0[1-9]|1[0-2])$")]
    public required string StartMonth { get; init; }

    /// <summary>
    /// Month in <c>YYYY-MM</c> format, inclusive.
    /// </summary>
    [RegularExpression("^\\d{4}-(0[1-9]|1[0-2])$")]
    public required string EndMonth { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public int? PageSize { get; init; }

    public string? PageToken { get; init; }
}
