namespace Contentstack.Requests.ExecutionLogs;

/// <summary>
/// The inputs of the GetAllExecutionLogs operation.
/// </summary>
public sealed record GetAllExecutionLogsRequest
{
    /// <summary>
    /// The unique identifier of the organization.
    /// </summary>
    public required string OrganizationUid { get; init; }

    /// <summary>
    /// The unique identifier of the automation project.
    /// </summary>
    public required string ProjectUid { get; init; }
}
