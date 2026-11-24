using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Models;

namespace FacebookBusinessManager.Models;

/// <summary>
/// The Page profile picture
/// </summary>
public record Picture
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public Data? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
