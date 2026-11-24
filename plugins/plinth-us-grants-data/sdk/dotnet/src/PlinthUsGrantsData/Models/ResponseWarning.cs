using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models;

/// <summary>
/// A parameter we recognized but could not honor, named rather than silently dropped.
/// </summary>
public record ResponseWarning
{
    [JsonPropertyName("parameter")]
    public required string Parameter { get; init; }

    /// <summary>
    /// <c>caveat</c> informs; anything else means a filter did NOT apply.
    /// </summary>
    [JsonPropertyName("severity")]
    public required string Severity { get; init; }

    [JsonPropertyName("reason")]
    public required string Reason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
