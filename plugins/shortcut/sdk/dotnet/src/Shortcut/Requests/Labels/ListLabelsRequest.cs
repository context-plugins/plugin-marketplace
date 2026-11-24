namespace Shortcut.Requests.Labels;

/// <summary>
/// The inputs of the ListLabels operation.
/// </summary>
public sealed record ListLabelsRequest
{
    /// <summary>
    /// A true/false boolean indicating if the slim versions of the Label should be returned.
    /// </summary>
    public bool? Slim { get; init; }
}
