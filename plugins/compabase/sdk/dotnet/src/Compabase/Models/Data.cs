using System.Text.Json.Serialization;
using Compabase.Core.Models;

namespace Compabase.Models;

/// <summary>
/// Domain error payload set by the handler.
/// </summary>
public record Data
{
    /// <summary>
    /// Human-readable message (used by 401 responses).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    /// <summary>
    /// Structured domain error (used by 400/404/429 responses).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public Error? Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
