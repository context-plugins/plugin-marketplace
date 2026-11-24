using System.Text.Json.Serialization;
using BrowserStack.Core.Models;

namespace BrowserStack.Models;

public record AutomateRecycleKeyJsonResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("old_key")]
    public string? OldKey { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("new_key")]
    public string? NewKey { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
