using System.Collections.Generic;
using System.Text.Json.Serialization;
using Instagram.Core.Models;

namespace Instagram.Models;

public record IgHashtagSearchResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public IReadOnlyList<Datum>? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
