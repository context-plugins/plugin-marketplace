namespace GoogleCloudStorageTransferService.Requests.Projects;

/// <summary>
/// The inputs of the StoragetransferProjectsAgentPoolsGet operation.
/// </summary>
public sealed record StoragetransferProjectsAgentPoolsGetRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (agentPoolsId).
    /// </summary>
    public required string AgentPoolsId { get; init; }
}
