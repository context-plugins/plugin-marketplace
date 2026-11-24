using System.Text.Json.Serialization;
using Cubic.Models.Enums;

namespace Cubic.Models;

public record After
{
    [JsonPropertyName("seat")]
    public required bool Seat { get; init; }

    [JsonPropertyName("role")]
    public required Role Role { get; init; }
}
