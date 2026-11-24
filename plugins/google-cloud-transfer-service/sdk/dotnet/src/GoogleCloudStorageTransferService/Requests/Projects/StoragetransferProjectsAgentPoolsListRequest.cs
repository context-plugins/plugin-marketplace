namespace GoogleCloudStorageTransferService.Requests.Projects;

/// <summary>
/// The inputs of the StoragetransferProjectsAgentPoolsList operation.
/// </summary>
public sealed record StoragetransferProjectsAgentPoolsListRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// An optional list of query parameters specified as JSON text in the form of: <c>{"agentPoolNames":["agentpool1","agentpool2",...]}</c> Since <c>agentPoolNames</c> support multiple values, its values must be specified with array notation. When the filter is either empty or not provided, the list returns all agent pools for the project.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// The list page size. The max allowed value is <c>256</c>.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// The list page token.
    /// </summary>
    public string? PageToken { get; init; }
}
