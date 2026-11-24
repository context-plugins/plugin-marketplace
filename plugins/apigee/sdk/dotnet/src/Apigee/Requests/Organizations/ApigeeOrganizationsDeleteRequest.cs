using Apigee.Models.Enums;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsDelete operation.
/// </summary>
public sealed record ApigeeOrganizationsDeleteRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Optional. This setting is applicable only for organizations that are soft-deleted (i.e., BillingType is not EVALUATION). It controls how long Organization data will be retained after the initial delete operation completes. During this period, the Organization may be restored to its last known state. After this period, the Organization will no longer be able to be restored. <b>Note: During the data retention period specified using this field, the Apigee organization cannot be recreated in the same Google Cloud project.</b>
    /// </summary>
    public Retention? Retention { get; init; }
}
