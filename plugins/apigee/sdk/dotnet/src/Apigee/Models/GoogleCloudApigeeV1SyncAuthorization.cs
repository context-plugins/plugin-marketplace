using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

public record GoogleCloudApigeeV1SyncAuthorization
{
    /// <summary>
    /// Entity tag (ETag) used for optimistic concurrency control as a way to help prevent simultaneous updates from overwriting each other. For example, when you call <see href="organizations/getSyncAuthorization">getSyncAuthorization</see> an ETag is returned in the response. Pass that ETag when calling the <see href="organizations/setSyncAuthorization">setSyncAuthorization</see> to ensure that you are updating the correct version. If you don't pass the ETag in the call to <c>setSyncAuthorization</c>, then the existing authorization is overwritten indiscriminately. <b>Note</b>: We strongly recommend that you use the ETag in the read-modify-write cycle to avoid race conditions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("etag")]
    public string? Etag { get; init; }

    /// <summary>
    /// Required. Array of service accounts to grant access to control plane resources, each specified using the following format: <c>serviceAccount:</c> service-account-name. The service-account-name is formatted like an email address. For example: <c>my-synchronizer-manager-service_account@my_project_id.iam.gserviceaccount.com</c> You might specify multiple service accounts, for example, if you have multiple environments and wish to assign a unique service account to each one. The service accounts must have <b>Apigee Synchronizer Manager</b> role. See also <see href="https://cloud.google.com/apigee/docs/hybrid/latest/sa-about#create-the-service-accounts">Create service accounts</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identities")]
    public IReadOnlyList<string>? Identities { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
