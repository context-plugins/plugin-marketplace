using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace S1.Models;

public record Agent
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [MaxLength(128)]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model")]
    [MaxLength(128)]
    public string? Model { get; init; }
}
