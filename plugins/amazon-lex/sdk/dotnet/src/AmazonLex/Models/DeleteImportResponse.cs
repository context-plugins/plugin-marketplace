using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record DeleteImportResponse
{
    /// <summary>
    /// The unique identifier of the deleted import.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("importId")]
    public string? ImportId { get; init; }

    /// <summary>
    /// The current status of the deletion. When the deletion is complete, the import will no longer be returned by the ListImports operation and calls to the DescribeImport operation with the import identifier will fail.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("importStatus")]
    public ImportStatus? ImportStatus { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
