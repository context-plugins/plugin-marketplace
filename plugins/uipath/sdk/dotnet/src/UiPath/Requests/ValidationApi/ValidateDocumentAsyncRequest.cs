using UiPath.Models;

namespace UiPath.Requests.ValidationApi;

/// <summary>
/// The inputs of the ValidateDocumentAsync operation.
/// </summary>
public sealed record ValidateDocumentAsyncRequest
{
    /// <summary>
    /// Unique identifier of the Document Understanding project
    /// </summary>
    public required string ProjectId { get; init; }

    /// <summary>
    /// API version to use for this request
    /// </summary>
    public string ApiVersion { get; init; } = "1";

    public required ValidationRequest Body { get; init; }
}
