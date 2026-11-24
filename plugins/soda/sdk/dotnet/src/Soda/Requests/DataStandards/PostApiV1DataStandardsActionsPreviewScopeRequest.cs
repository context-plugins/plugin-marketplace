using Soda.Models;

namespace Soda.Requests.DataStandards;

/// <summary>
/// The inputs of the PostApiV1DataStandardsActionsPreviewScope operation.
/// </summary>
public sealed record PostApiV1DataStandardsActionsPreviewScopeRequest
{
    public required PublicApiPreviewDataStandardScopeRequestDto Body { get; init; }
}
