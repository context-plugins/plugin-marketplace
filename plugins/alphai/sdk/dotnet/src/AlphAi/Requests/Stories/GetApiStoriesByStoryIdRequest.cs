using System.ComponentModel.DataAnnotations;

namespace AlphAi.Requests.Stories;

/// <summary>
/// The inputs of the GetApiStoriesByStoryId operation.
/// </summary>
public sealed record GetApiStoriesByStoryIdRequest
{
    /// <summary>
    /// A story id — the <c>story_id</c> of any article row, or an id from <c>/api/stories/</c>.
    /// </summary>
    [RegularExpression("^[a-f0-9]{16}$")]
    public required string StoryId { get; init; }
}
