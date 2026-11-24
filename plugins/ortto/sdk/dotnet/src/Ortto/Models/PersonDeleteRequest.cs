using System.Collections.Generic;
using System.Text.Json.Serialization;
using Ortto.Core.Models;

namespace Ortto.Models;

public record PersonDeleteRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("people")]
    public IReadOnlyList<Person1>? People { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
