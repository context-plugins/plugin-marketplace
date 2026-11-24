using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Profile for connecting to a Dataverse source.
/// </summary>
public record DataverseProfile
{
    /// <summary>
    /// Required. Environment URL of the Microsoft Dataverse instance. Example: <c>.crm.dynamics.com</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environmentUrl")]
    public string? EnvironmentUrl { get; init; }

    /// <summary>
    /// Required. Tenant id of the Microsoft Dataverse instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tenantId")]
    public string? TenantId { get; init; }

    /// <summary>
    /// Required. Credentials for authenticating with the Dataverse API.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oauthClientCredentials")]
    public OauthClientCredentials3? OauthClientCredentials { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
