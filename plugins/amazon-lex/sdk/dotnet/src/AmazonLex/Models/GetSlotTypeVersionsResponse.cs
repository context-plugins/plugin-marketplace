using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record GetSlotTypeVersionsResponse
{
    /// <summary>
    /// An array of SlotTypeMetadata objects, one for each numbered version of the slot type plus one for the $LATEST version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotTypes")]
    public IReadOnlyList<SlotTypeMetadata>? SlotTypes { get; init; }

    /// <summary>
    /// A pagination token for fetching the next page of slot type versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
