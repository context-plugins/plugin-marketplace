using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;
using GoogleCloudStorageTransferService.Models.Enums;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// TransferOptions define the actions to be performed on objects in a transfer.
/// </summary>
public record TransferOptions
{
    /// <summary>
    /// Represents the selected metadata options for a transfer job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadataOptions")]
    public MetadataOptions2? MetadataOptions { get; init; }

    /// <summary>
    /// When to overwrite objects that already exist in the sink. The default is that only objects that are different from the source are overwritten. If true, all objects in the sink whose name matches an object in the source are overwritten with the source object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overwriteObjectsAlreadyExistingInSink")]
    public bool? OverwriteObjectsAlreadyExistingInSink { get; init; }

    /// <summary>
    /// Whether objects that exist only in the sink should be deleted from the sink. <b>Note:</b> This option and delete_objects_from_source_after_transfer are mutually exclusive.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deleteObjectsUniqueInSink")]
    public bool? DeleteObjectsUniqueInSink { get; init; }

    /// <summary>
    /// When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwrite_objects_already_existing_in_sink.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overwriteWhen")]
    public OverwriteWhen? OverwriteWhen { get; init; }

    /// <summary>
    /// Whether objects should be deleted from the source after they are transferred to the sink. <b>Note:</b> This option and delete_objects_unique_in_sink are mutually exclusive.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deleteObjectsFromSourceAfterTransfer")]
    public bool? DeleteObjectsFromSourceAfterTransfer { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
