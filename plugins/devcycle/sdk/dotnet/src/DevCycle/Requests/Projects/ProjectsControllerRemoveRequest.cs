namespace DevCycle.Requests.Projects;

/// <summary>
/// The inputs of the ProjectsControllerRemove operation.
/// </summary>
public sealed record ProjectsControllerRemoveRequest
{
    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Key { get; init; }
}
