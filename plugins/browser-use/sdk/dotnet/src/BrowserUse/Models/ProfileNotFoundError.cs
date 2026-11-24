using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models;

/// <summary>
/// Error response when a profile is not found
/// </summary>
public record ProfileNotFoundError
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detail")]
    public string? Detail { get; init; } = "Profile not found";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
