using DoiT.Models;

namespace DoiT.Requests.DataHub;

/// <summary>
/// The inputs of the UpdateDatahubDataset operation.
/// </summary>
public sealed record UpdateDatahubDatasetRequest
{
    /// <summary>
    /// The name of the dataset to update (immutable, used for identification only).
    /// </summary>
    public required string Name { get; init; }

    public required DatahubV1DatasetsRequest2 Body { get; init; }
}
