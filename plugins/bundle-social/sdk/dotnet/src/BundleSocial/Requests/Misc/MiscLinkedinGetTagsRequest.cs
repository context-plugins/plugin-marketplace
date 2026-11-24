using System.ComponentModel.DataAnnotations;
using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscLinkedinGetTags operation.
/// </summary>
public sealed record MiscLinkedinGetTagsRequest
{
    public required string TeamId { get; init; }

    [MinLength(1)]
    public string? Q { get; init; }

    [StringLength(2048, MinimumLength = 1)]
    public string? Url { get; init; }

    [StringLength(200, MinimumLength = 1)]
    public string? DisplayName { get; init; }

    public Scope Scope { get; init; } = Scope.All;
}
