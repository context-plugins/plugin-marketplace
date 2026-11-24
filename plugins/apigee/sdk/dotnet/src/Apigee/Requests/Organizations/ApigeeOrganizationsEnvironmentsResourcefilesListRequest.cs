namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsResourcefilesList operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsResourcefilesListRequest
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
    /// Optional. Type of resource files to list. {{ resource_file_type }}
    /// </summary>
    public string? Type { get; init; }
}
