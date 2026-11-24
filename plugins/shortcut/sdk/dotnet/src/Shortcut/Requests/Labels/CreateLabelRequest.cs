using Shortcut.Models;

namespace Shortcut.Requests.Labels;

/// <summary>
/// The inputs of the CreateLabel operation.
/// </summary>
public sealed record CreateLabelRequest
{
    /// <summary>
    /// Request parameters for creating a Label on a Shortcut Story.
    /// </summary>
    public required CreateLabelParams Body { get; init; }
}
