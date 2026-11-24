using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

/// <summary>
/// Flag not found response
/// </summary>
public record OfrepFlagNotFoundError
{
    /// <summary>
    /// Feature flag key
    /// </summary>
    [JsonPropertyName("key")]
    [RegularExpression("^[a-z0-9-_.]+$")]
    public required string Key { get; init; }

    [JsonPropertyName("errorCode")]
    public string ErrorCode { get; } = "FLAG_NOT_FOUND";

    /// <summary>
    /// An error description for logging or other needs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errorDetails")]
    public string? ErrorDetails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
