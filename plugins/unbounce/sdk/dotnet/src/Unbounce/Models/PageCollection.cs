using System.Collections.Generic;
using System.Text.Json.Serialization;
using Unbounce.Core.Models;

namespace Unbounce.Models;

public record PageCollection
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pages")]
    public IReadOnlyList<Page>? Pages { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
