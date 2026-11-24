using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models;

/// <summary>
/// Error response when session timeout exceeds the maximum allowed limit
/// </summary>
public record SessionTimeoutLimitExceededError
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detail")]
    public string? Detail { get; init; } = "Maximum session timeout is 4 hours (240 minutes).";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
