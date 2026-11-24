using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsUpdateDebugmask operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsUpdateDebugmaskRequest
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
    /// Boolean flag that specifies whether to replace existing values in the debug mask when doing an update. Set to true to replace existing values. The default behavior is to append the values (false).
    /// </summary>
    public bool? ReplaceRepeatedFields { get; init; }

    /// <summary>
    /// Field debug mask to support partial updates.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required GoogleCloudApigeeV1DebugMask Body { get; init; }
}
