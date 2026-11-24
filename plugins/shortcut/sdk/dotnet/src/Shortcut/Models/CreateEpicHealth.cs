using System.Text.Json.Serialization;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

public record CreateEpicHealth
{
    /// <summary>
    /// The health status of the Epic.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status1 Status { get; init; }

    /// <summary>
    /// The description of the Health status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public string? Text { get; init; }
}
