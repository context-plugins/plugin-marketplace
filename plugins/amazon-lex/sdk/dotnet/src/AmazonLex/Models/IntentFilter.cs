using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record IntentFilter
{
    /// <summary>
    /// The name of the field to use for the filter.
    /// </summary>
    [JsonPropertyName("name")]
    public string Name { get; } = "IntentName";

    /// <summary>
    /// The value to use for the filter.
    /// </summary>
    [JsonPropertyName("values")]
    public required IReadOnlyList<string> Values { get; init; }

    /// <summary>
    /// The operator to use for the filter. Specify EQ when the ListIntents operation should return only aliases that equal the specified value. Specify CO when the ListIntents operation should return aliases that contain the specified value.
    /// </summary>
    [JsonPropertyName("operator")]
    public required Operator8 Operator { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
