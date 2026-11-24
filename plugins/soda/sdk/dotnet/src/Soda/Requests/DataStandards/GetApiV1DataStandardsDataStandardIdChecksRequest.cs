namespace Soda.Requests.DataStandards;

/// <summary>
/// The inputs of the GetApiV1DataStandardsDataStandardIdChecks operation.
/// </summary>
public sealed record GetApiV1DataStandardsDataStandardIdChecksRequest
{
    public required string DataStandardId { get; init; }

    public int? Page { get; init; }

    public int? Size { get; init; }
}
