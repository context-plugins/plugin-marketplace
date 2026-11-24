using System.Collections.Generic;
using System.Text.Json.Serialization;
using Compabase.Core.Models;

namespace Compabase.Models;

public record Sanctions
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entries")]
    public IReadOnlyList<Entry>? Entries { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
