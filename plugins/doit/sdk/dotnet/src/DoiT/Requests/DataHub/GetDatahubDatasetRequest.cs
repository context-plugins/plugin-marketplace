namespace DoiT.Requests.DataHub;

/// <summary>
/// The inputs of the GetDatahubDataset operation.
/// </summary>
public sealed record GetDatahubDatasetRequest
{
    /// <summary>
    /// The name of the dataset to retrieve.
    /// </summary>
    public required string Name { get; init; }
}
