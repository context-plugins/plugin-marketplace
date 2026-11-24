using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record AssociatedTranscriptFilter
{
    /// <summary>
    /// The name of the field to use for filtering. The allowed names are IntentId and SlotTypeId.
    /// </summary>
    [JsonPropertyName("name")]
    public required Name23 Name { get; init; }

    /// <summary>
    /// The values to use to filter the transcript.
    /// </summary>
    [JsonPropertyName("values")]
    public required IReadOnlyList<string> Values { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
