namespace UiPath.Requests.AuditLogs;

/// <summary>
/// The inputs of the GetOrganizationAuditSources operation.
/// </summary>
public sealed record GetOrganizationAuditSourcesRequest
{
    /// <summary>
    /// The name of the UiPath organization
    /// </summary>
    public required string OrganizationName { get; init; }
}
