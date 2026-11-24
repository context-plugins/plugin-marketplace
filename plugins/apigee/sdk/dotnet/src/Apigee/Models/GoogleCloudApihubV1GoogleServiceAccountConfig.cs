using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Config for Google service account authentication.
/// </summary>
public record GoogleCloudApihubV1GoogleServiceAccountConfig
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
