using System.Text.Json.Serialization;
using Compabase.Core.Models;
using Compabase.Models.Enums;

namespace Compabase.Models;

/// <summary>
/// Structured domain error (used by 400/404/429 responses).
/// </summary>
public record Error
{
    /// <summary>
    /// Machine-readable domain error code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public Code? Code { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("details")]
    public object? Details { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
