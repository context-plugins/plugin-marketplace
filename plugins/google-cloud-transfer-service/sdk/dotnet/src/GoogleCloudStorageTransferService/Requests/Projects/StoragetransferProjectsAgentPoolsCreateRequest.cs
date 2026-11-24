using GoogleCloudStorageTransferService.Models;

namespace GoogleCloudStorageTransferService.Requests.Projects;

/// <summary>
/// The inputs of the StoragetransferProjectsAgentPoolsCreate operation.
/// </summary>
public sealed record StoragetransferProjectsAgentPoolsCreateRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Required. The ID of the agent pool to create. The <c>agent_pool_id</c> must meet the following requirements: * Length of 128 characters or less. * Not start with the string <c>goog</c>. * Start with a lowercase ASCII character, followed by: * Zero or more: lowercase Latin alphabet characters, numerals, hyphens (<c>-</c>), periods (<c>.</c>), underscores (<c>_</c>), or tildes (<c>~</c>). * One or more numerals or lowercase ASCII characters. As expressed by the regular expression: <c>^(?!goog)<see href="[a-z0-9-._~]*[a-z0-9]">a-z</see>?$</c>.
    /// </summary>
    public string? AgentPoolId { get; init; }

    public required AgentPool Body { get; init; }
}
