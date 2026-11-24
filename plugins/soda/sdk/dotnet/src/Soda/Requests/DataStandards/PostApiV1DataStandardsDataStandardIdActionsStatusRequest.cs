using Soda.Models;

namespace Soda.Requests.DataStandards;

/// <summary>
/// The inputs of the PostApiV1DataStandardsDataStandardIdActionsStatus operation.
/// </summary>
public sealed record PostApiV1DataStandardsDataStandardIdActionsStatusRequest
{
    public required string DataStandardId { get; init; }

    public required PublicApiUpdateDataStandardStatusRequestDto Body { get; init; }
}
