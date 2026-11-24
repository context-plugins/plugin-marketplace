namespace Audioscrape.Requests.Libraries;

/// <summary>
/// The inputs of the GetLibrary operation.
/// </summary>
public sealed record GetLibraryRequest
{
    /// <summary>
    /// Library slug (e.g. <c>audioscrape</c>)
    /// </summary>
    public required string Slug { get; init; }
}
