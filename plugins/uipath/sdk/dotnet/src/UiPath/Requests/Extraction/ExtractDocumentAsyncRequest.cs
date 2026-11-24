using UiPath.Models;

namespace UiPath.Requests.Extraction;

/// <summary>
/// The inputs of the ExtractDocumentAsync operation.
/// </summary>
public sealed record ExtractDocumentAsyncRequest
{
    /// <summary>
    /// Unique identifier of the Document Understanding project
    /// </summary>
    public required string ProjectId { get; init; }

    /// <summary>
    /// API version to use for this request
    /// </summary>
    public string ApiVersion { get; init; } = "1";

    public required ExtractionRequest Body { get; init; }
}
