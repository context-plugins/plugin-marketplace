namespace Hud.Requests.Tasksets;

/// <summary>
/// The inputs of the GetTasksetByNameV2TasksetsByNameNameGet operation.
/// </summary>
public sealed record GetTasksetByNameV2TasksetsByNameNameGetRequest
{
    public required string Name { get; init; }
}
