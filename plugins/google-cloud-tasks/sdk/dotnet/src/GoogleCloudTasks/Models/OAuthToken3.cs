using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;

namespace GoogleCloudTasks.Models;

/// <summary>
/// If specified, an <see href="https://developers.google.com/identity/protocols/OAuth2">OAuth token</see> will be generated and attached as an <c>Authorization</c> header in the HTTP request. This type of authorization should generally only be used when calling Google APIs hosted on *.googleapis.com.
/// </summary>
public record OAuthToken3
{
    /// <summary>
    /// <see href="https://cloud.google.com/iam/docs/service-accounts">Service account email</see> to be used for generating OAuth token. The service account must be within the same project as the queue. The caller must have iam.serviceAccounts.actAs permission for the service account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceAccountEmail")]
    public string? ServiceAccountEmail { get; init; }

    /// <summary>
    /// OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scope")]
    public string? Scope { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
