using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;

namespace GoogleCloudTasks.Models;

/// <summary>
/// Associates <c>members</c>, or principals, with a <c>role</c>.
/// </summary>
public record Binding
{
    /// <summary>
    /// Specifies the principals requesting access for a Google Cloud resource. <c>members</c> can have the following values: * <c>allUsers</c>: A special identifier that represents anyone who is on the internet; with or without a Google account. * <c>allAuthenticatedUsers</c>: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * <c>user:{emailid}</c>: An email address that represents a specific Google account. For example, <c>alice@example.com</c> . * <c>serviceAccount:{emailid}</c>: An email address that represents a Google service account. For example, <c>my-other-app@appspot.gserviceaccount.com</c>. * <c>serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]</c>: An identifier for a <see href="https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts">Kubernetes service account</see>. For example, <c>my-project.svc.id.goog[my-namespace/my-kubernetes-sa]</c>. * <c>group:{emailid}</c>: An email address that represents a Google group. For example, <c>admins@example.com</c>. * <c>domain:{domain}</c>: The G Suite domain (primary) that represents all the users of that domain. For example, <c>google.com</c> or <c>example.com</c>. * <c>principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}</c>: A single identity in a workforce identity pool. * <c>principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}</c>: All workforce identities in a group. * <c>principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}</c>: All workforce identities with a specific attribute value. * <c>principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*</c>: All identities in a workforce identity pool. * <c>principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}</c>: A single identity in a workload identity pool. * <c>principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}</c>: A workload identity pool group. * <c>principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}</c>: All identities in a workload identity pool with a certain attribute. * <c>principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*</c>: All identities in a workload identity pool. * <c>deleted:user:{emailid}?uid={uniqueid}</c>: An email address (plus unique identifier) representing a user that has been recently deleted. For example, <c>alice@example.com?uid=123456789012345678901</c>. If the user is recovered, this value reverts to <c>user:{emailid}</c> and the recovered user retains the role in the binding. * <c>deleted:serviceAccount:{emailid}?uid={uniqueid}</c>: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, <c>my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901</c>. If the service account is undeleted, this value reverts to <c>serviceAccount:{emailid}</c> and the undeleted service account retains the role in the binding. * <c>deleted:group:{emailid}?uid={uniqueid}</c>: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, <c>admins@example.com?uid=123456789012345678901</c>. If the group is recovered, this value reverts to <c>group:{emailid}</c> and the recovered group retains the role in the binding. * <c>deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}</c>: Deleted single identity in a workforce identity pool. For example, <c>deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("members")]
    public IReadOnlyList<string>? Members { get; init; }

    /// <summary>
    /// The condition that is associated with this binding. If the condition evaluates to <c>true</c>, then this binding applies to the current request. If the condition evaluates to <c>false</c>, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the <see href="https://cloud.google.com/iam/help/conditions/resource-policies">IAM documentation</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("condition")]
    public Expr2? Condition { get; init; }

    /// <summary>
    /// Role that is assigned to the list of <c>members</c>, or principals. For example, <c>roles/viewer</c>, <c>roles/editor</c>, or <c>roles/owner</c>. For an overview of the IAM roles and permissions, see the <see href="https://cloud.google.com/iam/docs/roles-overview">IAM documentation</see>. For a list of the available pre-defined roles, see <see href="https://cloud.google.com/iam/docs/understanding-roles">here</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("role")]
    public string? Role { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
