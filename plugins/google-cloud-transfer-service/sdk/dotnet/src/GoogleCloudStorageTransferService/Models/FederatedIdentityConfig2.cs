using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// Optional. Federated identity config of a user registered Azure application. If <c>federated_identity_config</c> is specified, do not specify azure_credentials or credentials_secret.
/// </summary>
public record FederatedIdentityConfig2
{
    /// <summary>
    /// Required. The client (application) ID of the application with federated credentials.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientId")]
    public string? ClientId { get; init; }

    /// <summary>
    /// Required. The tenant (directory) ID of the application with federated credentials.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tenantId")]
    public string? TenantId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
