using System.Collections.Generic;
using System.Text.Json.Serialization;
using Unbounce.Core.Models;

namespace Unbounce.Models;

public record PagesLeadsResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("leads")]
    public IReadOnlyList<Lead>? Leads { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
