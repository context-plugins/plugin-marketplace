using Soda.Models;

namespace Soda.Requests.DataStandards;

/// <summary>
/// The inputs of the PostApiV1DataStandardsActionsTest operation.
/// </summary>
public sealed record PostApiV1DataStandardsActionsTestRequest
{
    public required PublicApiTestDataStandardRequestDto Body { get; init; }
}
