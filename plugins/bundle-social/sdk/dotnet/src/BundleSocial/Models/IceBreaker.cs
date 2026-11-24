using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace BundleSocial.Models;

public record IceBreaker
{
    [JsonPropertyName("question")]
    [MinLength(1)]
    public required string Question { get; init; }

    [JsonPropertyName("payload")]
    [StringLength(1000, MinimumLength = 1)]
    public required string Payload { get; init; }
}
