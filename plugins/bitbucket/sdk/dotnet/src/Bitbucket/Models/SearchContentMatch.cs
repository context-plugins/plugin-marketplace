using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bitbucket.Core.Models;

namespace Bitbucket.Models;

public record SearchContentMatch
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lines")]
    public IReadOnlyList<SearchLine>? Lines { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
