using UiPath.Models;

namespace UiPath.Requests.Classification;

/// <summary>
/// The inputs of the ClassifyDocumentAsync operation.
/// </summary>
public sealed record ClassifyDocumentAsyncRequest
{
    /// <summary>
    /// Unique identifier of the Document Understanding project
    /// </summary>
    public required string ProjectId { get; init; }

    /// <summary>
    /// API version to use for this request
    /// </summary>
    public string ApiVersion { get; init; } = "1";

    public required ClassificationRequest Body { get; init; }
}
