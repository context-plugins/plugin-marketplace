using System.Text.Json.Serialization;
using EinsteinBots.Models.Enums;

namespace EinsteinBots.Models;

public record Status
{
    /// <summary>
    /// Health status of Einstein Bots API.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status1 StatusValue { get; init; }
}
