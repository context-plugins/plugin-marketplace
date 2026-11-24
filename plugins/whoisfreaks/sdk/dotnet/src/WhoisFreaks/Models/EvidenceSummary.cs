using System.Collections.Generic;
using System.Text.Json.Serialization;
using WhoisFreaks.Core.Models;

namespace WhoisFreaks.Models;

public record EvidenceSummary
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("why_flagged")]
    public IReadOnlyList<string>? WhyFlagged { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
