using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// Optional. An Azure Blob Storage data source.
/// </summary>
public record AzureBlobStorageData2
{
    /// <summary>
    /// Optional. The Resource name of a secret in Secret Manager. The Azure SAS token must be stored in Secret Manager in JSON format: { "sas_token" : "SAS_TOKEN" } GoogleServiceAccount must be granted <c>roles/secretmanager.secretAccessor</c> for the resource. See [Configure access to a source: Microsoft Azure Blob Storage] (https://cloud.google.com/storage-transfer/docs/source-microsoft-azure#secret_manager) for more information. If <c>credentials_secret</c> is specified, do not specify azure_credentials. Format: <c>projects/{project_number}/secrets/{secret_name}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credentialsSecret")]
    public string? CredentialsSecret { get; init; }

    /// <summary>
    /// Optional. Federated identity config of a user registered Azure application. If <c>federated_identity_config</c> is specified, do not specify azure_credentials or credentials_secret.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("federatedIdentityConfig")]
    public FederatedIdentityConfig2? FederatedIdentityConfig { get; init; }

    /// <summary>
    /// Required. Input only. Credentials used to authenticate API requests to Azure. For information on our data retention policy for user credentials, see <see href="/storage-transfer/docs/data-retention#user-credentials">User credentials</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("azureCredentials")]
    public AzureCredentials2? AzureCredentials { get; init; }

    /// <summary>
    /// Service Directory Service to be used as the endpoint for transfers from a custom VPC. Format: <c>projects/{project_id}/locations/{location}/namespaces/{namespace}/services/{service}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("privateNetworkService")]
    public string? PrivateNetworkService { get; init; }

    /// <summary>
    /// Required. The container to transfer from the Azure Storage account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("container")]
    public string? Container { get; init; }

    /// <summary>
    /// Required. The name of the Azure Storage account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("storageAccount")]
    public string? StorageAccount { get; init; }

    /// <summary>
    /// Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("path")]
    public string? Path { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
