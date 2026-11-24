namespace DevCycle.Requests.Projects;

/// <summary>
/// The inputs of the ProjectsControllerFindOne operation.
/// </summary>
public sealed record ProjectsControllerFindOneRequest
{
    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Key { get; init; }
}
