using Shortcut.Models;

namespace Shortcut.Requests.Labels;

/// <summary>
/// The inputs of the UpdateLabel operation.
/// </summary>
public sealed record UpdateLabelRequest
{
    /// <summary>
    /// The unique ID of the Label you wish to update.
    /// </summary>
    public required long LabelPublicId { get; init; }

    public required UpdateLabel Body { get; init; }
}
