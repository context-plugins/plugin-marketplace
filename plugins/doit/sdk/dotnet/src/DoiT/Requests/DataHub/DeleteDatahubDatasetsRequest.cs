using DoiT.Models;

namespace DoiT.Requests.DataHub;

/// <summary>
/// The inputs of the DeleteDatahubDatasets operation.
/// </summary>
public sealed record DeleteDatahubDatasetsRequest
{
    public required DatahubV1DatasetsRequest1 Body { get; init; }
}
