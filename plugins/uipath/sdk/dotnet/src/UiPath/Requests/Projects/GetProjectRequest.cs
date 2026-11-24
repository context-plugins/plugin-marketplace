namespace UiPath.Requests.Projects;

/// <summary>
/// The inputs of the GetProject operation.
/// </summary>
public sealed record GetProjectRequest
{
    /// <summary>
    /// Unique identifier of the test project
    /// </summary>
    public required string ProjectId { get; init; }
}
