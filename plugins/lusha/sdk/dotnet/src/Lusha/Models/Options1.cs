using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record Options1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includePartialProfiles")]
    public bool? IncludePartialProfiles { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
