using System.Text.Json.Serialization;
using Givebutter.Core.Models;
using Givebutter.Core.Validation;
using Givebutter.Core.Validation.Attributes;

namespace Givebutter.Models;

public record Email
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    [Format(FormatKind.Email)]
    public string? Value { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_primary")]
    public bool? IsPrimary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
