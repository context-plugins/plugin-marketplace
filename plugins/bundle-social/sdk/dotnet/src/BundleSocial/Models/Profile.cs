using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace BundleSocial.Models;

public record Profile
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(1500)]
    public string? Description { get; init; }
}
