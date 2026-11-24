namespace Soda.Requests.Runners;

/// <summary>
/// The inputs of the GetApiV1RunnersRunnerId operation.
/// </summary>
public sealed record GetApiV1RunnersRunnerIdRequest
{
    public required string RunnerId { get; init; }
}
