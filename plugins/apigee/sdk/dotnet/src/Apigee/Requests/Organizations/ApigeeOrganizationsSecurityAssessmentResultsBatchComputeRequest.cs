using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSecurityAssessmentResultsBatchCompute operation.
/// </summary>
public sealed record ApigeeOrganizationsSecurityAssessmentResultsBatchComputeRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    public required GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequest Body { get; init; }
}
