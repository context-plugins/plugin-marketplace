namespace Shortcut.Requests.Epics;

/// <summary>
/// The inputs of the ListEpicHealths operation.
/// </summary>
public sealed record ListEpicHealthsRequest
{
    /// <summary>
    /// The unique ID of the Epic.
    /// </summary>
    public required long EpicPublicId { get; init; }
}
