using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessGetFoodMenus operation.
/// </summary>
public sealed record MiscGoogleBusinessGetFoodMenusRequest
{
    public required string TeamId { get; init; }

    [MinLength(1)]
    [MaxLength(2)]
    public IReadOnlyList<Field3>? Fields { get; init; }
}
