namespace DoiT.Requests.DataHub;

/// <summary>
/// The inputs of the DeleteDatahubDataset operation.
/// </summary>
public sealed record DeleteDatahubDatasetRequest
{
    /// <summary>
    /// The name of the dataset to delete.
    /// </summary>
    public required string Name { get; init; }
}
