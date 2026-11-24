using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// Message variable (Public API)
/// </summary>
public record DecisionEngineVariable
{
    /// <summary>
    /// The variable name (must be unique within a message)
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("config")]
    public Config? Config { get; init; }

    [JsonPropertyName("variants")]
    public required IReadOnlyList<DecisionEngineVariableVariant> Variants { get; init; }
}
