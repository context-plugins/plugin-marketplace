using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevision operation.
/// </summary>
public sealed record ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (sharedflowsId).
    /// </summary>
    public required string SharedflowsId { get; init; }

    /// <summary>
    /// Resource name segment (revisionsId).
    /// </summary>
    public required string RevisionsId { get; init; }

    /// <summary>
    /// Ignored. All uploads are validated regardless of the value of this field. It is kept for compatibility with existing APIs. Must be <c>true</c> or <c>false</c> if provided.
    /// </summary>
    public bool? Validate { get; init; }

    public required GoogleApiHttpBody Body { get; init; }
}
