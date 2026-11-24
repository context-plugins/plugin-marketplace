namespace Bitbucket.Requests.Pipelines;

/// <summary>
/// The inputs of the GetPipelineVariablesForUser operation.
/// </summary>
public sealed record GetPipelineVariablesForUserRequest
{
    /// <summary>
    /// Either the UUID of the account surrounded by curly-braces, for example <c>{account UUID}</c>, OR an Atlassian Account ID.
    /// </summary>
    public required string SelectedUser { get; init; }
}
