using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSharedflowsCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsSharedflowsCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Required. Must be set to either <c>import</c> or <c>validate</c>.
    /// </summary>
    public string? Action { get; init; }

    /// <summary>
    /// Required. The name to give the shared flow
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// Optional. The ID of the space to associated with this shared flow. Any IAM policies applied to the space will affect access to this shared flow. Note that this field is only respected when creating a new shared flow. It has no effect when creating a new revision for an existing shared flow.
    /// </summary>
    public string? Space { get; init; }

    public required GoogleApiHttpBody Body { get; init; }
}
