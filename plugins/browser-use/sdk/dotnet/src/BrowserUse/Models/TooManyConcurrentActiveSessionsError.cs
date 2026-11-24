using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models;

/// <summary>
/// Error response when user has too many concurrent active sessions
/// </summary>
public record TooManyConcurrentActiveSessionsError
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detail")]
    public string? Detail { get; init; } = "Too many concurrent active sessions. Please wait for one to finish, kill one, or upgrade your plan.";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
