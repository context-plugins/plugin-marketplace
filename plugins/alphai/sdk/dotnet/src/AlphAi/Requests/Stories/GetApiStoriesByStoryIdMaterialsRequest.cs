using System.ComponentModel.DataAnnotations;
using AlphAi.Core.Validation.Attributes;

namespace AlphAi.Requests.Stories;

/// <summary>
/// The inputs of the GetApiStoriesByStoryIdMaterials operation.
/// </summary>
public sealed record GetApiStoriesByStoryIdMaterialsRequest
{
    [RegularExpression("^[a-f0-9]{16}$")]
    public required string StoryId { get; init; }

    /// <summary>
    /// Opaque cursor from a prior response's <c>next_cursor</c>. Omit for the first (oldest) page.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// Articles per page, 1 to 50 on every tier (default 50). <c>limit</c> is accepted as an alias.
    /// </summary>
    [Minimum(1)]
    [Maximum(50)]
    public int PageSize { get; init; } = 50;
}
