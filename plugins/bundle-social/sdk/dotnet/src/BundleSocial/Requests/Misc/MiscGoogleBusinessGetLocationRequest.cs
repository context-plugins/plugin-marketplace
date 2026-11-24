using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessGetLocation operation.
/// </summary>
public sealed record MiscGoogleBusinessGetLocationRequest
{
    public required string TeamId { get; init; }

    [MinLength(1)]
    [MaxLength(20)]
    public IReadOnlyList<FieldBundleSocialMiscApi>? Fields { get; init; }
}
