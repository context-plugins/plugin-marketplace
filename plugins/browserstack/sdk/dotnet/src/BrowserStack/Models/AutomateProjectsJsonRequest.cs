using System.Text.Json.Serialization;
using BrowserStack.Core.Models;

namespace BrowserStack.Models;

public record AutomateProjectsJsonRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
