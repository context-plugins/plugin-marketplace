using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Request message for DataprocMetastore.AlterTableProperties.
/// </summary>
public record AlterTablePropertiesRequest
{
    /// <summary>
    /// Required. The name of the table containing the properties you're altering in the following format.databases/{database_id}/tables/{table_id}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tableName")]
    public string? TableName { get; init; }

    /// <summary>
    /// A map that describes the desired values to mutate. If update_mask is empty, the properties will not update. Otherwise, the properties only alters the value whose associated paths exist in the update mask
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("properties")]
    public IReadOnlyDictionary<string, string>? Properties { get; init; }

    /// <summary>
    /// A field mask that specifies the metadata table properties that are overwritten by the update. Fields specified in the update_mask are relative to the resource (not to the full request). A field is overwritten if it is in the mask.For example, given the target properties: properties { a: 1 b: 2 } And an update properties: properties { a: 2 b: 3 c: 4 } then if the field mask is:paths: "properties.b", "properties.c"then the result will be: properties { a: 1 b: 3 c: 4 }
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateMask")]
    public string? UpdateMask { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
