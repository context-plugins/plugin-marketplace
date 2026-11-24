using System.Collections.Generic;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models;

public record BatchRequest
{
    /// <summary>
    /// Up to 500 rows, answered in order.
    /// </summary>
    [JsonPropertyName("rows")]
    public required IReadOnlyList<BatchRow> Rows { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
