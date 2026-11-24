namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHook operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHookRequest
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
    /// Resource name segment (flowhooksId).
    /// </summary>
    public required string FlowhooksId { get; init; }
}
