using System.ComponentModel.DataAnnotations;
using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscInstagramSearchLocations operation.
/// </summary>
public sealed record MiscInstagramSearchLocationsRequest
{
    public required string TeamId { get; init; }

    /// <summary>
    /// Free-text query used to search location pages
    /// </summary>
    [MinLength(1)]
    public required string Q { get; init; }

    [Minimum(1)]
    [Maximum(25)]
    public int Limit { get; init; } = 10;
}
