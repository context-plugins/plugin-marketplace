using System.Text.Json.Serialization;
using RocketReach.Core.Models;

namespace RocketReach.Models;

/// <summary>
/// Social media links for the company
/// </summary>
public record Links
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("facebook")]
    public string? Facebook { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("twitter")]
    public string? Twitter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedin")]
    public string? Linkedin { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
