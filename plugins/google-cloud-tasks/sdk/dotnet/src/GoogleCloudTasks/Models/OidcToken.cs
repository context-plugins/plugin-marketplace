using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;

namespace GoogleCloudTasks.Models;

/// <summary>
/// Contains information needed for generating an <see href="https://developers.google.com/identity/protocols/OpenIDConnect">OpenID Connect token</see>. This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.
/// </summary>
public record OidcToken
{
    /// <summary>
    /// Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audience")]
    public string? Audience { get; init; }

    /// <summary>
    /// <see href="https://cloud.google.com/iam/docs/service-accounts">Service account email</see> to be used for generating OIDC token. The service account must be within the same project as the queue. The caller must have iam.serviceAccounts.actAs permission for the service account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceAccountEmail")]
    public string? ServiceAccountEmail { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
