namespace UiPath.Requests.Discovery;

/// <summary>
/// The inputs of the ListClassifiers operation.
/// </summary>
public sealed record ListClassifiersRequest
{
    /// <summary>
    /// Unique identifier of the Document Understanding project
    /// </summary>
    public required string ProjectId { get; init; }

    /// <summary>
    /// API version to use for this request
    /// </summary>
    public string ApiVersion { get; init; } = "1";
}
