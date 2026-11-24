namespace UiPath.Requests.Licenses;

/// <summary>
/// The inputs of the GetGroupLicenseAllocation operation.
/// </summary>
public sealed record GetGroupLicenseAllocationRequest
{
    /// <summary>
    /// The name of the UiPath organization
    /// </summary>
    public required string OrganizationName { get; init; }

    /// <summary>
    /// Unique identifier of the organization account
    /// </summary>
    public required string AccountId { get; init; }

    /// <summary>
    /// Unique identifier of the user group
    /// </summary>
    public required string GroupId { get; init; }
}
