using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

public record GroupPreferences
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group_guid")]
    public string? GroupGuid { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain_preference")]
    public string? DomainPreference { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
