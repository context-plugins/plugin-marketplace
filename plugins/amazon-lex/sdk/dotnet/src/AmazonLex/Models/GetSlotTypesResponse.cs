using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record GetSlotTypesResponse
{
    /// <summary>
    /// An array of objects, one for each slot type, that provides information such as the name of the slot type, the version, and a description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotTypes")]
    public IReadOnlyList<SlotTypeMetadata>? SlotTypes { get; init; }

    /// <summary>
    /// If the response is truncated, it includes a pagination token that you can specify in your next request to fetch the next page of slot types.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
