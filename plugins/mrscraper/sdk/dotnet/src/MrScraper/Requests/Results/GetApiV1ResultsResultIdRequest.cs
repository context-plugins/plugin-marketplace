namespace MrScraper.Requests.Results;

/// <summary>
/// The inputs of the GetApiV1ResultsResultId operation.
/// </summary>
public sealed record GetApiV1ResultsResultIdRequest
{
    public required string ResultId { get; init; }

    /// <summary>
    /// Includes stored HTML.
    /// </summary>
    public bool? IncludeHtml { get; init; }
}
