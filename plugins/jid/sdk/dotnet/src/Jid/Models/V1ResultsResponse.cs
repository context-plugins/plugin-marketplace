using System.Collections.Generic;
using System.Text.Json.Serialization;
using Jid.Core.Models;

namespace Jid.Models;

public record V1ResultsResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("results")]
    public IReadOnlyList<object>? Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
