namespace Shortcut.Requests.Epics;

/// <summary>
/// The inputs of the ListEpicDocuments operation.
/// </summary>
public sealed record ListEpicDocumentsRequest
{
    /// <summary>
    /// The unique ID of the Epic.
    /// </summary>
    public required long EpicPublicId { get; init; }
}
