using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiDatasetColumnContentDto
{
    [JsonPropertyName("attributes")]
    public required object Attributes { get; init; }

    [JsonPropertyName("columnId")]
    public required string ColumnId { get; init; }

    [JsonPropertyName("columnName")]
    public required string ColumnName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
