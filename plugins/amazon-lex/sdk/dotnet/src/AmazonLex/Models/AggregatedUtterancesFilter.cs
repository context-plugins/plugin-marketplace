using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record AggregatedUtterancesFilter
{
    /// <summary>
    /// The name of the field to filter the utterance list.
    /// </summary>
    [JsonPropertyName("name")]
    public string Name { get; } = "Utterance";

    /// <summary>
    /// The value to use for filtering the list of bots.
    /// </summary>
    [JsonPropertyName("values")]
    public required IReadOnlyList<string> Values { get; init; }

    /// <summary>
    /// The operator to use for the filter. Specify EQ when the ListAggregatedUtterances operation should return only utterances that equal the specified value. Specify CO when the ListAggregatedUtterances operation should return utterances that contain the specified value.
    /// </summary>
    [JsonPropertyName("operator")]
    public required Operator Operator { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
