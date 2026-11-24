using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record SocialLinks2
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedin")]
    public string? Linkedin { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
