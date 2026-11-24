using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models;

/// <summary>
/// Error response when a session is not found
/// </summary>
public record SessionNotFoundErrorError
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detail")]
    public string? Detail { get; init; } = "Session not found";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
