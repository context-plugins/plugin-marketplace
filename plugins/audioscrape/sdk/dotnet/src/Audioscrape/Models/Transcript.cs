using System.Collections.Generic;
using System.Text.Json.Serialization;
using Audioscrape.Core.Models;
using Audioscrape.Core.Validation.Attributes;

namespace Audioscrape.Models;

public record Transcript
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("partial")]
    public TranscriptPartial2? Partial { get; init; }

    [JsonPropertyName("segments")]
    public required IReadOnlyList<TranscriptSegment> Segments { get; init; }

    [JsonPropertyName("speakers")]
    public required IReadOnlyList<string> Speakers { get; init; }

    [JsonPropertyName("total_segments")]
    [Minimum(0)]
    public required int TotalSegments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
