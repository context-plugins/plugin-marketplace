using UiPath.Models;

namespace UiPath.Requests.Digitization;

/// <summary>
/// The inputs of the DigitizeDocument operation.
/// </summary>
public sealed record DigitizeDocumentRequest
{
    /// <summary>
    /// Unique identifier of the Document Understanding project
    /// </summary>
    public required string ProjectId { get; init; }

    /// <summary>
    /// API version to use for this request
    /// </summary>
    public string ApiVersion { get; init; } = "1";

    public required DigitizationRequest Body { get; init; }
}
