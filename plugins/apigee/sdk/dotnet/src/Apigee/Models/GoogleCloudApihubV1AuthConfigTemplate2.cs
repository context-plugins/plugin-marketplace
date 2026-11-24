using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Optional. The authentication template for the plugin.
/// </summary>
public record GoogleCloudApihubV1AuthConfigTemplate2
{
    /// <summary>
    /// Required. The list of authentication types supported by the plugin.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("supportedAuthTypes")]
    public IReadOnlyList<SupportedAuthType>? SupportedAuthTypes { get; init; }

    /// <summary>
    /// Optional. The service account of the plugin hosting service. This service account should be granted the required permissions on the Auth Config parameters provided while creating the plugin instances corresponding to this plugin. For example, if the plugin instance auth config requires a secret manager secret, the service account should be granted the secretmanager.versions.access permission on the corresponding secret, if the plugin instance auth config contains a service account, the service account should be granted the iam.serviceAccounts.getAccessToken permission on the corresponding service account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceAccount")]
    public GoogleCloudApihubV1GoogleServiceAccountConfig3? ServiceAccount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
