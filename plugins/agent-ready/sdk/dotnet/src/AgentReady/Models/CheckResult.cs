using System.Collections.Generic;
using System.Text.Json.Serialization;
using AgentReady.Core.Models;
using AgentReady.Models.Enums;

namespace AgentReady.Models;

/// <summary>
/// Result of a single check.
/// </summary>
public record CheckResult
{
    [JsonPropertyName("checkId")]
    public required string CheckId { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Outcome of a single check.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status Status { get; init; }

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonPropertyName("howToFix")]
    public required string? HowToFix { get; init; }

    [JsonPropertyName("details")]
    public required IReadOnlyDictionary<string, object> Details { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
