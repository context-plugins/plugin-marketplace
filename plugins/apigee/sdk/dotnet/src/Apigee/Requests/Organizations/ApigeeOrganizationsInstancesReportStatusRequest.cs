using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsInstancesReportStatus operation.
/// </summary>
public sealed record ApigeeOrganizationsInstancesReportStatusRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (instancesId).
    /// </summary>
    public required string InstancesId { get; init; }

    public required GoogleCloudApigeeV1ReportInstanceStatusRequest Body { get; init; }
}
