namespace DoiT.Requests.CloudDiagrams;

/// <summary>
/// The inputs of the ExportCloudDiagramJson operation.
/// </summary>
public sealed record ExportCloudDiagramJsonRequest
{
    /// <summary>
    /// Layer ID.
    /// </summary>
    public required string Id { get; init; }
}
