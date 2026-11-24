using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// Represents a config used to authenticate message requests.
/// </summary>
public record GoogleCloudEventarcV1PipelineDestinationAuthenticationConfig
{
    /// <summary>
    /// Optional. If specified, an <see href="https://developers.google.com/identity/protocols/OAuth2">OAuth token</see> will be generated and attached as an <c>Authorization</c> header in the HTTP request. This type of authorization should generally only be used when calling Google APIs hosted on *.googleapis.com.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oauthToken")]
    public GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOAuthToken1? OauthToken { get; init; }

    /// <summary>
    /// Optional. This authenticate method will apply Google OIDC tokens signed by a Google Cloud service account to the requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("googleOidc")]
    public GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOidcToken2? GoogleOidc { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
