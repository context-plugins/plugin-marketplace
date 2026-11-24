using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// Required. Input only. Credentials used to authenticate API requests to Azure. For information on our data retention policy for user credentials, see <see href="/storage-transfer/docs/data-retention#user-credentials">User credentials</see>.
/// </summary>
public record AzureCredentials2
{
    /// <summary>
    /// Required. Azure shared access signature (SAS). For more information about SAS, see <see href="https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview">Grant limited access to Azure Storage resources using shared access signatures (SAS)</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sasToken")]
    public string? SasToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
