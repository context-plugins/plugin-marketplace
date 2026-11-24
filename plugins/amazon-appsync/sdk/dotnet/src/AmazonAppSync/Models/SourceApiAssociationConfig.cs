using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models.Enums;

namespace AmazonAppSync.Models;

public record SourceApiAssociationConfig
{
    /// <summary>
    /// The property that indicates which merging option is enabled in the source API association. Valid merge types are MANUAL_MERGE (default) and AUTO_MERGE. Manual merges are the default behavior and require the user to trigger any changes from the source APIs to the merged API manually. Auto merges subscribe the merged API to the changes performed on the source APIs so that any change in the source APIs are also made to the merged API. Auto merges use MergedApiExecutionRoleArn to perform merge operations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mergeType")]
    public MergeType? MergeType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
