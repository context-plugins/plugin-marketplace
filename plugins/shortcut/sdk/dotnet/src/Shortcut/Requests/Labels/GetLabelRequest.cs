namespace Shortcut.Requests.Labels;

/// <summary>
/// The inputs of the GetLabel operation.
/// </summary>
public sealed record GetLabelRequest
{
    /// <summary>
    /// The unique ID of the Label.
    /// </summary>
    public required long LabelPublicId { get; init; }
}
