namespace Contentstack.Requests.ExecutionLogs;

/// <summary>
/// The inputs of the GetExecutionLog operation.
/// </summary>
public sealed record GetExecutionLogRequest
{
    /// <summary>
    /// The unique identifier of the organization.
    /// </summary>
    public required string OrganizationUid { get; init; }

    /// <summary>
    /// The unique identifier of the automation project.
    /// </summary>
    public required string ProjectUid { get; init; }

    /// <summary>
    /// The unique identifier of the execution log entry.
    /// </summary>
    public required string ExecutionUid { get; init; }
}
