namespace Soda.Requests.Runners;

/// <summary>
/// The inputs of the DeleteApiV1RunnersRunnerId operation.
/// </summary>
public sealed record DeleteApiV1RunnersRunnerIdRequest
{
    public required string RunnerId { get; init; }
}
