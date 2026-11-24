using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DeleteImportRequest
{
    /// <summary>
    /// The unique identifier of the import to delete.
    /// </summary>
    [JsonPropertyName("importId")]
    public required string ImportId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
