using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// Specifies where the manifest is located.
/// </summary>
public record TransferManifest
{
    /// <summary>
    /// Specifies the path to the manifest in Cloud Storage. The Google-managed service account for the transfer must have <c>storage.objects.get</c> permission for this object. An example path is <c>gs://bucket_name/path/manifest.csv</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public string? Location { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
