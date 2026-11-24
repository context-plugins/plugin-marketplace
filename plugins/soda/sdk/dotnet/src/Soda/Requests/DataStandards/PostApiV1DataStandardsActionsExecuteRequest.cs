using Soda.Models;

namespace Soda.Requests.DataStandards;

/// <summary>
/// The inputs of the PostApiV1DataStandardsActionsExecute operation.
/// </summary>
public sealed record PostApiV1DataStandardsActionsExecuteRequest
{
    public required PublicApiExecuteDataStandardsRequestDto Body { get; init; }
}
