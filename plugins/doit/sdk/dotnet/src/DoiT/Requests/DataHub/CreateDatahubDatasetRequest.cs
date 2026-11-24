using DoiT.Models;

namespace DoiT.Requests.DataHub;

/// <summary>
/// The inputs of the CreateDatahubDataset operation.
/// </summary>
public sealed record CreateDatahubDatasetRequest
{
    public required DatahubV1DatasetsRequest Body { get; init; }
}
