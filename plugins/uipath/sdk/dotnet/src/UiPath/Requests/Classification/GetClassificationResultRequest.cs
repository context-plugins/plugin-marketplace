namespace UiPath.Requests.Classification;

/// <summary>
/// The inputs of the GetClassificationResult operation.
/// </summary>
public sealed record GetClassificationResultRequest
{
    /// <summary>
    /// Unique identifier of the Document Understanding project
    /// </summary>
    public required string ProjectId { get; init; }

    /// <summary>
    /// Unique identifier of the asynchronous job request to retrieve results for
    /// </summary>
    public required string RequestId { get; init; }

    /// <summary>
    /// API version to use for this request
    /// </summary>
    public string ApiVersion { get; init; } = "1";
}
