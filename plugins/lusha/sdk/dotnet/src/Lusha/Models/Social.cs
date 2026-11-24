using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record Social
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedin")]
    public string? Linkedin { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("crunchbase")]
    public string? Crunchbase { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
