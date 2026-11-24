namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsDevelopersSetDeveloperStatus operation.
/// </summary>
public sealed record ApigeeOrganizationsDevelopersSetDeveloperStatusRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (developersId).
    /// </summary>
    public required string DevelopersId { get; init; }

    /// <summary>
    /// Status of the developer. Valid values are <c>active</c> and <c>inactive</c>.
    /// </summary>
    public string? Action { get; init; }
}
