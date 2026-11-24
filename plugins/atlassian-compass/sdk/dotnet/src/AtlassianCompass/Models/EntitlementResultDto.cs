using System.Text.Json.Serialization;
using AtlassianCompass.Core.Models;

namespace AtlassianCompass.Models;

public record EntitlementResultDto
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("@class")]
    public string? Class { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
