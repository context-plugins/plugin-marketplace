using AlphaAi.Core.Validation.Attributes;

namespace AlphaAi.Requests.Stories;

/// <summary>
/// The inputs of the GetApiStories operation.
/// </summary>
public sealed record GetApiStoriesRequest
{
    /// <summary>
    /// Opaque cursor from a prior response's <c>next_cursor</c>. Omit for the newest page.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// Stories per page, 1 to 50 on every tier (default 20). <c>limit</c> is accepted as an alias.
    /// </summary>
    [Minimum(1)]
    [Maximum(50)]
    public int PageSize { get; init; } = 20;
}
