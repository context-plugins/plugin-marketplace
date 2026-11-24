using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record SlotTypeFilter
{
    /// <summary>
    /// The name of the field to use for filtering.
    /// </summary>
    [JsonPropertyName("name")]
    public required Name26 Name { get; init; }

    /// <summary>
    /// The value to use to filter the response.
    /// </summary>
    [JsonPropertyName("values")]
    public required IReadOnlyList<string> Values { get; init; }

    /// <summary>
    /// The operator to use for the filter. Specify EQ when the ListSlotTypes operation should return only aliases that equal the specified value. Specify CO when the ListSlotTypes operation should return aliases that contain the specified value.
    /// </summary>
    [JsonPropertyName("operator")]
    public required Operator9 Operator { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
