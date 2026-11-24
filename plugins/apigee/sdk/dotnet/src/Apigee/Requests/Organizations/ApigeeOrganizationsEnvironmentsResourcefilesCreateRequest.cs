using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsResourcefilesCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsResourcefilesCreateRequest
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
    /// Required. Name of the resource file. Must match the regular expression: [a-zA-Z0-9:/\\!@#$%^&amp;{}\[\]()+\-=,.~'` ]{1,255}
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// Required. Resource file type. {{ resource_file_type }}
    /// </summary>
    public string? Type { get; init; }

    public required GoogleApiHttpBody Body { get; init; }
}
