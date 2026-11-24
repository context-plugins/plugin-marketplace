namespace Shortcut.Requests.Labels;

/// <summary>
/// The inputs of the DeleteLabel operation.
/// </summary>
public sealed record DeleteLabelRequest
{
    /// <summary>
    /// The unique ID of the Label.
    /// </summary>
    public required long LabelPublicId { get; init; }
}
