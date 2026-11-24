using DoiT.Models;

namespace DoiT.Requests.CloudDiagrams;

/// <summary>
/// The inputs of the SearchCloudDiagrams operation.
/// </summary>
public sealed record SearchCloudDiagramsRequest
{
    public required CloudDiagramsSearchRequest Body { get; init; }
}
