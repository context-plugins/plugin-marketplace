using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// Optional. If specified, an <see href="https://developers.google.com/identity/protocols/OAuth2">OAuth token</see> will be generated and attached as an <c>Authorization</c> header in the HTTP request. This type of authorization should generally only be used when calling Google APIs hosted on *.googleapis.com.
/// </summary>
public record GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOAuthToken1
{
    /// <summary>
    /// Required. Service account email used to generate the <see href="https://developers.google.com/identity/protocols/OAuth2">OAuth token</see>. The principal who calls this API must have iam.serviceAccounts.actAs permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts for more information. Eventarc service agents must have roles/roles/iam.serviceAccountTokenCreator role to allow Pipeline to create OAuth2 tokens for authenticated requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceAccount")]
    public string? ServiceAccount { get; init; }

    /// <summary>
    /// Optional. OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scope")]
    public string? Scope { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
