namespace Bitly.Requests.OrganizationsApi;

/// <summary>
/// The inputs of the GetPlanLimits operation.
/// </summary>
public sealed record GetPlanLimitsRequest
{
    /// <summary>
    /// A GUID for a Bitly organization
    /// </summary>
    public required string OrganizationGuid { get; init; }
}
