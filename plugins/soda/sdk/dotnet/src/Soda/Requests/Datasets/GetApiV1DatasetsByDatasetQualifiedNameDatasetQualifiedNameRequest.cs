namespace Soda.Requests.Datasets;

/// <summary>
/// The inputs of the GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedName operation.
/// </summary>
public sealed record GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameRequest
{
    public required string DatasetQualifiedName { get; init; }
}
