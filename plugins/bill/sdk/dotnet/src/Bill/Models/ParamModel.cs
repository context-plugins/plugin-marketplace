using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

public record ParamModel
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additional")]
    public IReadOnlyDictionary<string, string>? Additional { get; init; }

    [JsonPropertyName("name")]
    [MinLength(1)]
    public required string Name { get; init; }

    [JsonPropertyName("value")]
    [MinLength(1)]
    public required string Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
