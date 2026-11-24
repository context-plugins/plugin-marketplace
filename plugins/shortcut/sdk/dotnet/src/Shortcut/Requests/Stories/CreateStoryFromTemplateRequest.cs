using Shortcut.Models;

namespace Shortcut.Requests.Stories;

/// <summary>
/// The inputs of the CreateStoryFromTemplate operation.
/// </summary>
public sealed record CreateStoryFromTemplateRequest
{
    /// <summary>
    /// Request parameters for creating a story from a story template. These parameters are merged with the values derived from the template.
    /// </summary>
    public required CreateStoryFromTemplateParams Body { get; init; }
}
