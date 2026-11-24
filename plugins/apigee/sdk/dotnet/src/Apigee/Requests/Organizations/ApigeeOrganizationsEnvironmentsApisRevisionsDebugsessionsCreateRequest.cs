using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (environmentsId).
    /// </summary>
    public required string EnvironmentsId { get; init; }

    /// <summary>
    /// Resource name segment (apisId).
    /// </summary>
    public required string ApisId { get; init; }

    /// <summary>
    /// Resource name segment (revisionsId).
    /// </summary>
    public required string RevisionsId { get; init; }

    /// <summary>
    /// Optional. The time in seconds after which this DebugSession should end. A timeout specified in DebugSession will overwrite this value.
    /// </summary>
    public string? Timeout { get; init; }

    public required GoogleCloudApigeeV1DebugSession Body { get; init; }
}
