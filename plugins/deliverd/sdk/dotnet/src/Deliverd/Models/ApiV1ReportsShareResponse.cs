using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1ReportsShareResponse
{
    [JsonPropertyName("granted")]
    public required IReadOnlyList<Granted> Granted { get; init; }

    [JsonPropertyName("unresolvedPhrases")]
    public required IReadOnlyList<string> UnresolvedPhrases { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
