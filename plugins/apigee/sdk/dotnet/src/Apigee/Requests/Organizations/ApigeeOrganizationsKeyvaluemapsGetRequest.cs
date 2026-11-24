namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsKeyvaluemapsGet operation.
/// </summary>
public sealed record ApigeeOrganizationsKeyvaluemapsGetRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (keyvaluemapsId).
    /// </summary>
    public required string KeyvaluemapsId { get; init; }
}
