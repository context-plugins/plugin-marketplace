namespace Contentstack.Requests.Environments;

/// <summary>
/// The inputs of the GetProjectsByProjectUidEnvironments operation.
/// </summary>
public sealed record GetProjectsByProjectUidEnvironmentsRequest
{
    /// <summary>
    /// The unique identifier of the Launch project.
    /// </summary>
    public required string ProjectUid { get; init; }
}
