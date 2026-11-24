namespace Soda.Requests.DataStandards;

/// <summary>
/// The inputs of the GetApiV1DataStandardsDataStandardIdDatasets operation.
/// </summary>
public sealed record GetApiV1DataStandardsDataStandardIdDatasetsRequest
{
    public required string DataStandardId { get; init; }

    public int? Page { get; init; }

    public int? Size { get; init; }
}
