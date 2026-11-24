using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record Options
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includePartialProfiles")]
    public bool? IncludePartialProfiles { get; init; } = true;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeDnc")]
    public bool? ExcludeDnc { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
