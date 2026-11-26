using System.Text.Json.Serialization;
using EinsteinBots.Models.Enums;

namespace EinsteinBots.Models;

public record Target
{
    /// <summary>
    /// Type of the transfer target.
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeEnum Type { get; init; }

    /// <summary>
    /// ID of the transfer target.
    /// </summary>
    [JsonPropertyName("value")]
    public required string Value { get; init; }
}
