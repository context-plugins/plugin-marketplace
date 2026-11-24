using System.ComponentModel.DataAnnotations;

namespace Shortcut.Requests.ExternalLink;

/// <summary>
/// The inputs of the GetExternalLinkStories operation.
/// </summary>
public sealed record GetExternalLinkStoriesRequest
{
    /// <summary>
    /// The external link associated with one or more stories.
    /// </summary>
    [MaxLength(2048)]
    [RegularExpression("^https?://.+$")]
    public required string ExternalLink { get; init; }
}
