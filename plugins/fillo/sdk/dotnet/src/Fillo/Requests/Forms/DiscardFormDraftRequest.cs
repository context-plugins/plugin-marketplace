namespace Fillo.Requests.Forms;

/// <summary>
/// The inputs of the DiscardFormDraft operation.
/// </summary>
public sealed record DiscardFormDraftRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }

    /// <summary>
    /// No input. Any key is a 400.
    /// </summary>
    public object? Body { get; init; }
}
