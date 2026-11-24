using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// The identity of an Azure application through which Storage Transfer Service can authenticate requests using Azure workload identity federation. Storage Transfer Service can issue requests to Azure Storage through registered Azure applications, eliminating the need to pass credentials to Storage Transfer Service directly. To configure federated identity, see <see href="https://cloud.google.com/storage-transfer/docs/source-microsoft-azure#option_3_authenticate_using_federated_identity">Configure access to Microsoft Azure Storage</see>.
/// </summary>
public record FederatedIdentityConfig
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
