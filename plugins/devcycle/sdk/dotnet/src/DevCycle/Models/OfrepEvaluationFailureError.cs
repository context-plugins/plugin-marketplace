using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

/// <summary>
/// Flag evaluation failure response
/// </summary>
public record OfrepEvaluationFailureError
{
    /// <summary>
    /// Feature flag key
    /// </summary>
    [JsonPropertyName("key")]
    [RegularExpression("^[a-z0-9-_.]+$")]
    public required string Key { get; init; }

    /// <summary>
    /// OpenFeature compatible error code. See https://openfeature.dev/specification/types#error-code
    /// </summary>
    [JsonPropertyName("errorCode")]
    public required ErrorCode ErrorCode { get; init; }

    /// <summary>
    /// An error description for logging or other needs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errorDetails")]
    public string? ErrorDetails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
