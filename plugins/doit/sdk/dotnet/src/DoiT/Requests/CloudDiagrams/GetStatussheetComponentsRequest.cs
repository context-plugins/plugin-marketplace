using DoiT.Models;

namespace DoiT.Requests.CloudDiagrams;

/// <summary>
/// The inputs of the GetStatussheetComponents operation.
/// </summary>
public sealed record GetStatussheetComponentsRequest
{
    /// <summary>
    /// Layer ID.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Space-separated projection fields for component documents.
    /// </summary>
    public string? P { get; init; }

    public required CloudDiagramStatussheetGetRequest Body { get; init; }
}
