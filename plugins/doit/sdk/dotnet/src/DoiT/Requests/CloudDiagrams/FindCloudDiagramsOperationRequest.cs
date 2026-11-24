using DoiT.Models;

namespace DoiT.Requests.CloudDiagrams;

/// <summary>
/// The inputs of the FindCloudDiagrams operation.
/// </summary>
public sealed record FindCloudDiagramsOperationRequest
{
    public required FindCloudDiagramsRequest Body { get; init; }
}
