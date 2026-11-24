using Apigee.Models.Enums;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSecurityProfilesV2List operation.
/// </summary>
public sealed record ApigeeOrganizationsSecurityProfilesV2ListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Optional. The maximum number of profiles to return
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListSecurityProfilesV2</c> call. Provide this to retrieve the subsequent page.
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// Optional. The risk assessment type of the security profiles. Defaults to ADVANCED_API_SECURITY.
    /// </summary>
    public RiskAssessmentType2? RiskAssessmentType { get; init; }
}
