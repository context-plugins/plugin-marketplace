using System.Collections.Generic;
using System.Text.Json.Serialization;
using JuriSign.Core.Models;

namespace JuriSign.Models;

public record ValidationError1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errors")]
    public IReadOnlyDictionary<string, object>? Errors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
