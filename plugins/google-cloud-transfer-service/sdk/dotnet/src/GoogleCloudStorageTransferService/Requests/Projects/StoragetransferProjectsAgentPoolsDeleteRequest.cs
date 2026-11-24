namespace GoogleCloudStorageTransferService.Requests.Projects;

/// <summary>
/// The inputs of the StoragetransferProjectsAgentPoolsDelete operation.
/// </summary>
public sealed record StoragetransferProjectsAgentPoolsDeleteRequest
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
