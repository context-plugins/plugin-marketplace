namespace Contentstack.Requests.AuditLogs;

/// <summary>
/// The inputs of the GetAllAuditLogs operation.
/// </summary>
public sealed record GetAllAuditLogsRequest
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
