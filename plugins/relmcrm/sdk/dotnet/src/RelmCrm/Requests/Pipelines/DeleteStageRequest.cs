namespace RelmCrm.Requests.Pipelines;

/// <summary>
/// The inputs of the DeleteStage operation.
/// </summary>
public sealed record DeleteStageRequest
{
    public required string Key { get; init; }

    public required string Stage { get; init; }
}
