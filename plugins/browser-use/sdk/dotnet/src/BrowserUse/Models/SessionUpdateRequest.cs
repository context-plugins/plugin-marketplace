using System.Text.Json.Serialization;
using BrowserUse.Core.Models;
using BrowserUse.Models.AnyOf;

namespace BrowserUse.Models;

/// <summary>
/// Rename a session. Null clears the user-set name, so the UI falls back to
/// the session's opening task.
/// </summary>
public record SessionUpdateRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public Title? Title { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
