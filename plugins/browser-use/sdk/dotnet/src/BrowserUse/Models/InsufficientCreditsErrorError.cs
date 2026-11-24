using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models;

/// <summary>
/// Error response when there are insufficient credits
/// </summary>
public record InsufficientCreditsErrorError
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detail")]
    public string? Detail { get; init; } = "Insufficient credits";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
