using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudApiGateway.Core.Models;

namespace GoogleCloudApiGateway.Models;

/// <summary>
/// An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A <c>Policy</c> is a collection of <c>bindings</c>. A <c>binding</c> binds one or more <c>members</c>, or principals, to a single <c>role</c>. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A <c>role</c> is a named list of permissions; each <c>role</c> can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a <c>binding</c> can also specify a <c>condition</c>, which is a logical expression that allows access to a resource only if the expression evaluates to <c>true</c>. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the <see href="https://cloud.google.com/iam/help/conditions/resource-policies">IAM documentation</see>. <b>JSON example:</b> ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time &lt; timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` <b>YAML example:</b> ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time &lt; timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the <see href="https://cloud.google.com/iam/docs/">IAM documentation</see>.
/// </summary>
public record ApigatewayPolicy
{
    /// <summary>
    /// Associates a list of <c>members</c>, or principals, with a <c>role</c>. Optionally, may specify a <c>condition</c> that determines how and when the <c>bindings</c> are applied. Each of the <c>bindings</c> must contain at least one principal. The <c>bindings</c> in a <c>Policy</c> can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the <c>bindings</c> grant 50 different roles to <c>user:alice@example.com</c>, and not to any other principal, then you can add another 1,450 principals to the <c>bindings</c> in the <c>Policy</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bindings")]
    public IReadOnlyList<ApigatewayBinding>? Bindings { get; init; }

    /// <summary>
    /// Specifies the format of the policy. Valid values are <c>0</c>, <c>1</c>, and <c>3</c>. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version <c>3</c>. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions <b>Important:</b> If you use IAM Conditions, you must include the <c>etag</c> field whenever you call <c>setIamPolicy</c>. If you omit this field, then IAM allows you to overwrite a version <c>3</c> policy with a version <c>1</c> policy, and all of the conditions in the version <c>3</c> policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the <see href="https://cloud.google.com/iam/help/conditions/resource-policies">IAM documentation</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public int? Version { get; init; }

    /// <summary>
    /// Specifies cloud audit logging configuration for this policy.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("auditConfigs")]
    public IReadOnlyList<ApigatewayAuditConfig>? AuditConfigs { get; init; }

    /// <summary>
    /// <c>etag</c> is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the <c>etag</c> in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An <c>etag</c> is returned in the response to <c>getIamPolicy</c>, and systems are expected to put that etag in the request to <c>setIamPolicy</c> to ensure that their change will be applied to the same version of the policy. <b>Important:</b> If you use IAM Conditions, you must include the <c>etag</c> field whenever you call <c>setIamPolicy</c>. If you omit this field, then IAM allows you to overwrite a version <c>3</c> policy with a version <c>1</c> policy, and all of the conditions in the version <c>3</c> policy are lost.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("etag")]
    public string? Etag { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
