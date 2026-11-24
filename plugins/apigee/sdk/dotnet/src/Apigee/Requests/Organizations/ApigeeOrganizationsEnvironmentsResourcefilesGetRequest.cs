namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsResourcefilesGet operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsResourcefilesGetRequest
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
    /// Required. Resource file type. {{ resource_file_type }}
    /// </summary>
    public required string Type { get; init; }

    /// <summary>
    /// Required. ID of the resource file. Must match the regular expression: [a-zA-Z0-9:/\\!@#$%^&amp;{}\[\]()+\-=,.~'` ]{1,255}
    /// </summary>
    public required string Name { get; init; }
}
