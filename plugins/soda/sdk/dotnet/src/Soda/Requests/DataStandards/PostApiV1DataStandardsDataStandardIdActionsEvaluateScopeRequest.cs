namespace Soda.Requests.DataStandards;

/// <summary>
/// The inputs of the PostApiV1DataStandardsDataStandardIdActionsEvaluateScope operation.
/// </summary>
public sealed record PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeRequest
{
    public required string DataStandardId { get; init; }
}
