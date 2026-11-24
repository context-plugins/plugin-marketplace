using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record GetBuiltinSlotTypesResponse
{
    /// <summary>
    /// An array of BuiltInSlotTypeMetadata objects, one entry for each slot type returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotTypes")]
    public IReadOnlyList<BuiltinSlotTypeMetadata>? SlotTypes { get; init; }

    /// <summary>
    /// If the response is truncated, the response includes a pagination token that you can use in your next request to fetch the next page of slot types.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
