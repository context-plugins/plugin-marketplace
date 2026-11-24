namespace Soda.Requests.DataStandards;

/// <summary>
/// The inputs of the DeleteApiV1DataStandardsDataStandardId operation.
/// </summary>
public sealed record DeleteApiV1DataStandardsDataStandardIdRequest
{
    public required string DataStandardId { get; init; }
}
