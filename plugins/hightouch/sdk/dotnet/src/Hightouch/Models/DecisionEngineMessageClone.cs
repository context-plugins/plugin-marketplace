using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// Request body for cloning a Decision Engine message
/// </summary>
public record DecisionEngineMessageClone
{
    /// <summary>
    /// Name for the copy. Defaults to "Copy of &lt;source message name&gt;".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }
}
