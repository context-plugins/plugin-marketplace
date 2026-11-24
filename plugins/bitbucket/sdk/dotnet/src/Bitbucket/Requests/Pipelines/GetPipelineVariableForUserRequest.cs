namespace Bitbucket.Requests.Pipelines;

/// <summary>
/// The inputs of the GetPipelineVariableForUser operation.
/// </summary>
public sealed record GetPipelineVariableForUserRequest
{
    /// <summary>
    /// Either the UUID of the account surrounded by curly-braces, for example <c>{account UUID}</c>, OR an Atlassian Account ID.
    /// </summary>
    public required string SelectedUser { get; init; }

    /// <summary>
    /// The UUID of the variable to retrieve.
    /// </summary>
    public required string VariableUuid { get; init; }
}
