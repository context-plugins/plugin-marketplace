using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Optional. The service account of the plugin hosting service. This service account should be granted the required permissions on the Auth Config parameters provided while creating the plugin instances corresponding to this plugin. For example, if the plugin instance auth config requires a secret manager secret, the service account should be granted the secretmanager.versions.access permission on the corresponding secret, if the plugin instance auth config contains a service account, the service account should be granted the iam.serviceAccounts.getAccessToken permission on the corresponding service account.
/// </summary>
public record GoogleCloudApihubV1GoogleServiceAccountConfig3
{
    /// <summary>
    /// Required. The service account to be used for authenticating request. The <c>iam.serviceAccounts.getAccessToken</c> permission should be granted on this service account to the impersonator service account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceAccount")]
    public string? ServiceAccount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
