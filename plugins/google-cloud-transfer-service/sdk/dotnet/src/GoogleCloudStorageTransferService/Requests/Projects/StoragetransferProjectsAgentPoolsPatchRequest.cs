using GoogleCloudStorageTransferService.Models;

namespace GoogleCloudStorageTransferService.Requests.Projects;

/// <summary>
/// The inputs of the StoragetransferProjectsAgentPoolsPatch operation.
/// </summary>
public sealed record StoragetransferProjectsAgentPoolsPatchRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (agentPoolsId).
    /// </summary>
    public required string AgentPoolsId { get; init; }

    /// <summary>
    /// The [field mask] (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf) of the fields in <c>agentPool</c> to update in this request. The following <c>agentPool</c> fields can be updated: * display_name * bandwidth_limit
    /// </summary>
    public string? UpdateMask { get; init; }

    public required AgentPool Body { get; init; }
}
