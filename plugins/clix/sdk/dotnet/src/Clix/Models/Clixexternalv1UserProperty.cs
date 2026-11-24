using System.Text.Json.Serialization;
using Clix.Core.Models;
using Clix.Models.Enums;

namespace Clix.Models;

public record Clixexternalv1UserProperty
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Clixexternalv1UserPropertyType? Type { get; init; } = Clixexternalv1UserPropertyType.UserPropertyTypeString;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public string? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
