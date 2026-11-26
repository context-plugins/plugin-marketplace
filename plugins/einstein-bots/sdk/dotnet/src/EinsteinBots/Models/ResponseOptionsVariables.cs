using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace EinsteinBots.Models;

/// <summary>
/// Variables returned in the response.
/// </summary>
public record ResponseOptionsVariables
{
    /// <summary>
    /// Indicates whether to include variables in the response.
    /// </summary>
    [JsonPropertyName("include")]
    public required bool Include { get; init; }

    /// <summary>
    /// Filter the returned variables. If missing, null, or empty, no filtering is applied.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filter")]
    public IReadOnlyList<string>? Filter { get; init; }

    /// <summary>
    /// Indicates whether the response contains only changed variables.
    /// </summary>
    [JsonPropertyName("onlyChanged")]
    public required bool OnlyChanged { get; init; }
}
