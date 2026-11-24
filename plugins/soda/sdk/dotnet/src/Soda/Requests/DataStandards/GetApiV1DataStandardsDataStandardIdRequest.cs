namespace Soda.Requests.DataStandards;

/// <summary>
/// The inputs of the GetApiV1DataStandardsDataStandardId operation.
/// </summary>
public sealed record GetApiV1DataStandardsDataStandardIdRequest
{
    public required string DataStandardId { get; init; }
}
