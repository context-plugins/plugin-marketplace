using System.ComponentModel.DataAnnotations;
using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscFacebookSearchPages operation.
/// </summary>
public sealed record MiscFacebookSearchPagesRequest
{
    public required string TeamId { get; init; }

    /// <summary>
    /// Free-text query used to search Facebook Pages
    /// </summary>
    [StringLength(100, MinimumLength = 1)]
    public required string Q { get; init; }

    [Minimum(1)]
    [Maximum(25)]
    public int Limit { get; init; } = 10;
}
