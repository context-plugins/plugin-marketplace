using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatch operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatchRequest
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
    /// Resource name segment (overridesId).
    /// </summary>
    public required string OverridesId { get; init; }

    /// <summary>
    /// List of fields to be updated.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required GoogleCloudApigeeV1TraceConfigOverride Body { get; init; }
}
