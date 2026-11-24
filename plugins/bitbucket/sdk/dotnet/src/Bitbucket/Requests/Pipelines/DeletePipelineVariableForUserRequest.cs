namespace Bitbucket.Requests.Pipelines;

/// <summary>
/// The inputs of the DeletePipelineVariableForUser operation.
/// </summary>
public sealed record DeletePipelineVariableForUserRequest
{
    /// <summary>
    /// Either the UUID of the account surrounded by curly-braces, for example <c>{account UUID}</c>, OR an Atlassian Account ID.
    /// </summary>
    public required string SelectedUser { get; init; }

    /// <summary>
    /// The UUID of the variable to delete.
    /// </summary>
    public required string VariableUuid { get; init; }
}
