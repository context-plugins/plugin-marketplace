namespace Shortcut.Requests.Epics;

/// <summary>
/// The inputs of the ListEpics operation.
/// </summary>
public sealed record ListEpicsRequest
{
    /// <summary>
    /// A true/false boolean indicating whether to return Epics with their descriptions.
    /// </summary>
    public bool? IncludesDescription { get; init; }
}
