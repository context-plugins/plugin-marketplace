using Soda.Models;

namespace Soda.Requests.DataStandards;

/// <summary>
/// The inputs of the PostApiV1DataStandardsDataStandardId operation.
/// </summary>
public sealed record PostApiV1DataStandardsDataStandardIdRequest
{
    public required string DataStandardId { get; init; }

    public required PublicApiDataStandardRequestDto Body { get; init; }
}
