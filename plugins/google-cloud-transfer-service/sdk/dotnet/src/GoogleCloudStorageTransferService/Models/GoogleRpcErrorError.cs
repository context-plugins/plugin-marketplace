using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// The error envelope every Google API returns.
/// </summary>
public record GoogleRpcErrorError
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public Error? Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
